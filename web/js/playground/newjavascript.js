
/**
 * @author Vladimir Riha <rihavla1> URL: https://github.com/ladariha
 */


var typePrefix = require("../facetengine_ext.js").prefix;
var mongoose = require("mongoose");
var FacetRecord = mongoose.model("FacetRecord");
var Slideid = mongoose.model("Slideid");
var GITHUB_TYPE = "Slideindex_Github";
var GBOOK_TYPE = "Slideindex_Gbook";
var GBOOK_CATEGORY = "Slideindex_Gbook_Category";
var GBOOK_AUTHOR = "Slideindex_Gbook_Author";
var GDRAWING_TYPE = "Slideindex_Gdrawing";
exports.name = "Slideindex parser";

/**
 * Parses information (Google Books, Google Drawings and GitHub blocks)  from Slideindex extension and stores them to the database. First it gets
 * slide index and after it is received it starts to parse individual types.
 * @param mapping assoc array of mapping between data-slideid and _id values
 * @param course course ID
 * @param lecture lecture ID
 * @param data all microdata items
 */
exports.parse = function(mapping, course, lecture, data) {
    require('../../slideindex/slideindex_ext.js').index(course, lecture, "jsobject", undefined, "", function(err, index) {
        if (err)
            console.error("Error getting index");
        else
            processData(mapping, course, lecture, data, index);
    }, true);
};
var ObjectId = require('mongoose').Types.ObjectId;


function processData(mapping, course, lecture, data, index) {
    // gbooks
    if (typeof index.gbooks != "undefined")
        processGbooks(index.gbooks, course, lecture, mapping);
    // boolean github
    if (typeof index.github != "undefined")
        processGithubOrDrawingEvo(index.github, course, lecture, mapping, GITHUB_TYPE);
    // boolean gdrawing
    if (typeof index.drawings != "undefined")
        processGithubOrDrawingEvo(index.drawings, course, lecture, mapping, GDRAWING_TYPE);
}

function processGbooks(items, course, lecture, mapping) {
    try {
        var prefix = new RegExp("^" + typePrefix + GBOOK_TYPE);
        var arr = [];
        for (var a in mapping) {
            arr.push(mapping[a]);
        }
        var query = FacetRecord.remove({  // remove all existing records for Gbooks for given presentation
            type: prefix
        });
        query.where('slideid').in(arr);
        query.exec(function(err, data) {
            if (err) {
                console.error(err);
            } else { // if ok, insert all new items
                for (var i = 0; i < items.length; i++) {
                    // each author
                    try {
                        for (var j = 0; j < items[i].author.length; j++) {
                            if (items[i].author[j].length > 0) {
                                try {
                                    var a = new FacetRecord();
                                    a.type = typePrefix + GBOOK_AUTHOR;
                                    a.value = items[i].author[j];
                                    a.slideid = mapping[items[i].slideid];
                                    if (typeof mapping[items[i].slideid] != "undefined") {
                                        a.save(function(err) {
                                            if (err)
                                                throw "Problem saving FacetRecord " + items[i].slideid + ": " + err.toString();
                                        });
                                    }
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }

                        // each category
                        var cat_records = {};
                        for (var j = 0; j < items[i].category.length; j++) {
                            if (items[i].category[j].length > 0) {
                                var cats = items[i].category[j].split("/");
                                for (var b = 0; b < cats.length; b++) {
                                    var category = cats[b].replace(/^\s+|\s+$/g, '');
                                    //                                    category = category.toLowerCase();
                                    if (typeof cat_records[category] == "undefined") { // insert only new value
                                        cat_records[category] = 1; // mark inserted
                                        try {
                                            var a = new FacetRecord();
                                            a.type = typePrefix + GBOOK_CATEGORY;
                                            a.value = category;
                                            a.slideid = mapping[items[i].slideid];
                                            if (typeof mapping[items[i].slideid] != "undefined") {
                                                a.save(function(err) {
                                                    if (err)
                                                        throw "Problem saving FacetRecord " + items[i].slideid + ": " + err;
                                                });
                                            }
                                        } catch (e) {
                                            console.error(e.toString());
                                        }
                                    }
                                }
                            }
                        }
                    } catch (er) {
                        console.error(er.toString());
                    }
                }
            }
        });
    } catch (ee) {
        console.error(ee.toString());
    }
}

function processGithubOrDrawingEvo(items, course, lecture, mapping, type) {// proste seber vsechny z db a nastav je na true nebo false, nic vic
    try {
        var prefix = new RegExp("^" + typePrefix + type); // get all records for type /GithubOrDrawing at once
        var query = FacetRecord.find({
            type: prefix
        });
        var arr = [];

        for (var a in mapping) { // mapping[mdw_lecture1_1_xxx] = _id;
            arr.push(mapping[a] + '');
        }

        var handledSlides = {};

        query.where('slideid').in(arr);  // limit them to mapping records

        query.exec(function(err, data) { // get all github data from db for given presentation (all slides)
            var data_assoc = {};
            for (var j = 0; j < data.length; j++) {
                data_assoc[data[j].slideid] = data[j]; // data[j].slideid is mdw_lectur1.... SPATNE
            }

            for (var j = 0; j < items.length; j++) {
                if (typeof data_assoc[mapping[items[j].slideid] + ''] != "undefined") { // so the record is already in db for given slide, if it is true then nothing has to be done
                    if (data_assoc[mapping[items[j].slideid] + ''].value !== "true") {
                        data_assoc[mapping[items[j].slideid] + ''].value = "true";
                        data_assoc[mapping[items[j].slideid] + ''].save(function(err) {
                            if (err)
                                throw "Problem saving FacetRecord " + items[j].slideid + ": " + err;
                        });
                    }
                } else {
                    if (typeof handledSlides[items[j].slideid] == "undefined") { // to avoid multiple records (2 gdrawings in one slide)
                        var a = new FacetRecord();
                        a.type = typePrefix + type;
                        a.value = "true";
                        a.slideid = mapping[items[j].slideid];
                        if (typeof mapping[items[j].slideid] != "undefined") {
                            a.save(function(err) {
                                if (err)
                                    throw "Problem saving FacetRecord slideindex: " + err;
                            });
                        }
                    }
                }
                handledSlides[items[j].slideid] = 1
            }

            for (var a in mapping) { // a is data-slideid
                if (typeof handledSlides[a] == "undefined") {

                    //    console.log("typeof handledSlides[a]="+typeof handledSlides[a]+" where a: "+a);
                    // so this slide has not been handled, it could be in DB but doesn't have to'
                    if (typeof data_assoc[mapping[a] + ''] == "undefined") {// so this mapping has no FR record yet
                        var t = new FacetRecord();
                        t.type = typePrefix + type;
                        t.value = "false";
                        t.slideid = mapping[a] + '';
                        if (typeof mapping[a] != "undefined") {
                            t.save(function(err) {
                                if (err)
                                    throw "Problem saving FacetRecord slideindex: " + err;
                            });
                        }
                    } else {
                        if (data_assoc[mapping[a] + ''].value !== "false") {
                            data_assoc[mapping[a] + ''].value = "false";
                            data_assoc[mapping[a] + ''].save(function(err) {
                                if (err)
                                    throw "Problem saving FacetRecord slideindex: " + err;
                            });
                        }
                    }
                }
            }
        });
    } catch (_err) {
        console.error("processGithubOrDrawing: " + _err.toString());
    }
}

function aaa(){
    
}
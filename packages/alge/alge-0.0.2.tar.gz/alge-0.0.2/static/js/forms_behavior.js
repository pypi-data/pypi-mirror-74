$(function () {
    $('.selectpicker').selectpicker();
});

var specs = {{ forms.specs | safe }};
var models = {{ forms.models | safe }};
var metrics = {{ forms.metrics | safe }};


function change_file(file_id, label_id) {
    file_obj = document.getElementById(file_id);
    label_obj = document.getElementById(label_id);
    label_obj.innerHTML = "";

    var newLabels = specs[file_obj.value]['labels'];
    console.log(specs)

    var newLabelsGrouped = newLabels.reduce(function (rv, x) {
        (rv[x[1]] = rv[x[1]] || []).push(x[0]);
        return rv
    }, {});

    $('#label').selectpicker('destroy');
    $('#label').selectpicker();
    var $cont = $('#label');
    $cont.innerHTML = "";
    for (group in newLabelsGrouped) {
        $('<optgroup/>').attr('label', group).appendTo($cont);
        for (itemPos in newLabelsGrouped[group]) {
            $cont.find('optgroup').last().append('<option>' + newLabelsGrouped[group][itemPos] + '</option>');
        }

    }
}

function change_label(label_id, features_id, models_id, metric_id) {
    label_obj = document.getElementById(label_id);
    features_obj = document.getElementById(features_id);
    models_obj = document.getElementById(models_id);
    metric_obj = document.getElementById(metric_id);

    var file = document.getElementById('file').value;
    var label = label_obj.value;

    var problem_type = specs[file]['labels'].filter(function(x){ return x[0] == label })[0][1];

    if (problem_type=='classification') {
        $('#oversampling').prop("disabled", false);
    }
    else {
        $('#oversampling').prop("disabled", true);
    }

    var features = specs[file]['features'];
    var newFeaturesGrouped = features.reduce(function(rv, x) {
        (rv[x[1]] = rv[x[1]] || []).push(x[0]);
        return rv
    }, {});

    $('#features').selectpicker('destroy');
    $('#features').selectpicker();
    var $cont = $('#features');
    $cont.innerHTML = "";
    for (group in newFeaturesGrouped) {
        $('<optgroup/>').attr('label', group).appendTo($cont);
        for (itemPos in newFeaturesGrouped[group]) {
            if(newFeaturesGrouped[group][itemPos] != label) {
                console.log(newFeaturesGrouped[group][itemPos]);
                $cont.find('optgroup').last().append('<option>' + newFeaturesGrouped[group][itemPos] + '</option>');
            }

        }

    }

    $('#metric').selectpicker('destroy');
    $('#metric').selectpicker();
    $('#metric').innerHTML = "";
    newMetrics = metrics[problem_type];
    for(var option in newMetrics){
        var value = newMetrics[option];
        var newOption = document.createElement('option');
        newOption.value = value;
        newOption.innerHTML = value;
        metric_obj.options.add(newOption);
    }

    $('#models').selectpicker('destroy');
    $('#models').selectpicker();
    $('#models').innerHTML = "";
    newModels = models[problem_type];
    for(var option in newModels){
        var value = newModels[option];
        console.log(value);
        var newOption = document.createElement('option');
        newOption.value = value;
        newOption.innerHTML = value;
        models_obj.options.add(newOption);
    }
}
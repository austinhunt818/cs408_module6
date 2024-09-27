
QUnit.module('Lab5', function() {

    QUnit.test('make sure the alertSelection function alerts the right value', function(assert) {
        var result = document.querySelector('input[name="selection"]:checked').value;
        assert.equal(result, 'accumsan');
    });

});

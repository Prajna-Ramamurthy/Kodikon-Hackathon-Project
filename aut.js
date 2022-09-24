var wage = document.getElementById("wage");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 65) {
        validate(e);
    }
});

function validate(e) {
    alert('Validated');
}
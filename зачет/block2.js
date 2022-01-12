function handler() {
    var tb1 = document.getElementById("1");
    var tb2 = document.getElementById("2");

    tmp = tb1.value
    tb1.value =tb2.value 
    tb2.value = tmp

}
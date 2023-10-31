var your_drink;

var reverse = function(s){
    return s.split(' ').reverse().join(' ');
}

var barista ={

    str1: "ion",
    str2: reverse ("rscne"),

    str3: "ypt",
    request: function(preferences) {
        return preferences + "Secret word:" + this.str2 + this.str3 + this.str1;
    }
};
barista.request (your_drink).replace
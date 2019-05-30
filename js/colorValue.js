function colorValue() {

    this.x;
    this.y;
    var hsb = new Array(3);
    var rgb = new Array(3);
    var hex = new Array(3);

    hsb[0] = 150;
    hsb[1] = 100;
    hsb[2] = 100;

    this.update = function () {
        this.updateRGB();
        this.updateHEX();
        // console.log(this.getRGB());
    }

    this.updateHue = function (hue) {
        hsb[0] = Math.floor(hue);
        this.update();
    }

    this.updateSat = function (sat) {
        hsb[1] = Math.floor(sat);
        this.update();
    }

    this.updateBri = function (bri) {
        hsb[2] = Math.floor(bri);
        this.update();
    }

    this.getHSBArr = function () {
        return hsb;
    };

    this.getHSB = function () {
        return "" + hsb[0] + "," + hsb[1] + "," + hsb[2];
    };

    this.getHSBPercent = function () {
        return "" + hsb[0] + "," + hsb[1] + "%," + hsb[2] + "%";
    };

    this.updateRGB = function () {

        var h;

        if (hsb[0] == 360) {
            h = 0;
        }
        else {
            h = hsb[0];
        }
        var s = hsb[1] / 100;
        var b = hsb[2] / 100;

        var rPrime;
        var gPrime;
        var bPrime;

        var c = b * s;
        var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        var m = b - c;

        var test = Math.floor(h / 60);

        switch (test) {
            case 0:
                rPrime = c;
                gPrime = x;
                bPrime = 0;
                break;
            case 1:
                rPrime = x;
                gPrime = c;
                bPrime = 0;
                break;
            case 2:
                rPrime = 0;
                gPrime = c;
                bPrime = x;
                break;
            case 3:
                rPrime = 0;
                gPrime = x;
                bPrime = c;
                break;
            case 4:
                rPrime = x;
                gPrime = 0;
                bPrime = c;
                break;
            case 5:
                rPrime = c;
                gPrime = 0;
                bPrime = x;
                break;
        }

        rgb[0] = Math.floor((rPrime + m) * 255);
        rgb[1] = Math.floor((gPrime + m) * 255);
        rgb[2] = Math.floor((bPrime + m) * 255);
    };

    this.getRGB = function () {
        return "" + rgb[0] + "," + rgb[1] + "," + rgb[2];
    };

    this.updateHEX = function () {
        hex[0] = rgb[0].toString(16);
        hex[1] = rgb[1].toString(16);
        hex[2] = rgb[2].toString(16);

        if (hex[0].length == 1) {
            hex[0] = "0" + hex[0];
        }
        if (hex[1].length == 1) {
            hex[1] = "0" + hex[1];
        }
        if (hex[2].length == 1) {
            hex[2] = "0" + hex[2];
        }
    }

    this.getHEX = function () {
        return "" + hex[0] + hex[1] + hex[2];
    };

    this.getHEXWithPound = function () {
        return "#" + hex[0] + hex[1] + hex[2];
    };

    this.getDULLRGB = function () {
        var dullR = Math.floor(rgb[0] / 8);
        var dullG = Math.floor(rgb[1] / 8);
        var dullB = Math.floor(rgb[2] / 8);
        return "" + dullR + "," + dullG + "," + dullB;
    }
}
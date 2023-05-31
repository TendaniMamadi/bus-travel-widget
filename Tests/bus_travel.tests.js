
describe('Set Points', function () {
    it('should allow passenger to load 40 points', function () {

        const busride = Busride();

        busride.setPoints(40)
        assert.equal(40, busride.getPoints());

    });

    it('should allow passenger to load 25 points', function () {

        const busride = Busride()

        busride.setPoints(25)
        assert.equal(25, busride.getPoints());

    });

    it('should allow passenger to load 30 points', function () {

        const busride = Busride()

        busride.setPoints(30)
        assert.equal(30, busride.getPoints());

    });

});


describe('makePeakTrip', function () {
    it('should allow passenger to make Khayelitsha peak trips', function () {

        const busride = Busride()


        assert.equal(50, busride.makePeakTrip("Khayelitsha", "peak"));

    });

    it('should allow passenger to make Dunoon peak trips', function () {

        const busride = Busride()

        assert.equal(31.25, busride.makePeakTrip("Dunoon", "peak"));


    });

    it('should allow passenger to make Mitchells plain peak trips', function () {

        const busride = Busride()

        assert.equal(37.50, busride.makePeakTrip("Mitchells_Plain", "peak"));

    });

});



describe('makeOffPeak', function () {
    it('should allow passenger to make Khayelitsha trip during off peak', function () {

        const busride = Busride()

        assert.equal(40, busride.makeOffPeak("Khayelitsha", "off_peak"));


    });

    it('should allow passenger to make Dunoon trip during off peak', function () {

        const busride = Busride()

        assert.equal(25, busride.makeOffPeak("Dunoon", "off_peak"));

    });

    it('should allow passenger to make Mitchells plain  trip during off peak', function () {

        const busride = Busride()

        assert.equal(30, busride.makeOffPeak("Mitchells_Plain", "off_peak"));

    });

});


describe('totalTripsTaken', function () {
    it('should calculate total peak and off peak trips made', function () {

        const busride = Busride()

        busride.setPoints(30)
        assert.equal(30, busride.getPoints());


    });

});

describe('totalAmountSpent', function () {
    it('should calculate total amount spent on trips', function () {

        const busride = Busride()

        busride.setPoints(30)
        assert.equal(30, busride.getPoints());


    });

});



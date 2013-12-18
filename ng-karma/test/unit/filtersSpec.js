'use strict';

describe('filter', function() {
    var valutaFilter;
    
    beforeEach(function() {
        module('ngKarmaApp.filters');
        inject(function($filter) {
            valutaFilter = $filter('ValutaFilter');
        });
    });
    
    describe('ValutaFilter', function() {
        it('Il prezzo unitario deve essere preceduto dalla valuta', function() {                                      
            expect(valutaFilter(20.55)).toBe("(EUR) 20.55");
        });
    });
    
});

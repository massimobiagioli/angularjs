'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ng-karma', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    it('Reindirizza a Home', function() {
        expect(browser().location().url()).toBe("/home");
    });

    describe('esempio', function() {

        beforeEach(function() {
            browser().navigateTo('#/esempio');
        });

        it('Senza i filtri impostati, deve visualizzare 5 elementi', function() {
            expect(repeater('div .row-data').count()).toEqual(5);            
        });
        
        it('Con il filtro impostato per articolo = mat deve visualizzare un elemento', function() {
            input('filters.cod').enter('mat');
            expect(repeater('div .row-data').count()).toEqual(5);            
        });
        
    });

});

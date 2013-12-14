'use strict';

describe('service', function() {    
    var data;
    
    beforeEach(function() {
        module('ngKarmaApp.services');
        inject(function(EsempioFactory) {
            data = EsempioFactory.loadMockData();            
        });
    });
    
    describe('loadMockData', function() {
        it('Devono esistere 5 articoli', function() {            
            expect(data.articoli.length).toBe(5);
        });

        it('Verifica articolo 1: codice', function() {            
            expect(data.articoli[0].cod).toBe("ART-001");
        });

        it('Verifica articolo 1: descrizione', function() {            
            expect(data.articoli[0].des).toBe("matita");
        });

        it('Verifica articolo 1: prezzo unitario', function() {            
            expect(data.articoli[0].prezzo_unitario).toBe(0.85);
        });
                
    });
  
});

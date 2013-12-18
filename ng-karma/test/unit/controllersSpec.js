'use strict';

describe('controllers', function(){
    var scope,
        esempioController;
    
    beforeEach(function() {
        module('ngKarmaApp.services');
        module('ngKarmaApp.controllers');
        inject(function($rootScope, $controller, EsempioFactory) {
            scope = $rootScope.$new();                        
            esempioController = $controller('EsempioController', {$scope: scope, 'EsempioFactory': EsempioFactory});
        });
    });
    
    describe("init", function() {
        it('Il controller deve inizializzare correttamente i dati', function() {            
            expect(scope.data.articoli.length).toBe(5);            
        }); 
    });
    
    describe("search", function() {
        it('La funzione di ricerca deve filtrare correttamente gli articoli', function() {            
            var articolo = {
                cod: "ART-001",
                des: "matita",
                prezzo_unitario: 0.85
            };            
                        
            scope.filters.des = "mat";
            
            expect(scope.search(articolo)).toBe(true);            
        }); 
    });
    
});

'use strict';

angular.module('ngKarmaApp.services', []).
    factory('EsempioFactory', function() {
        return {
            loadMockData: function() {
                return {
                    articoli: [
                        {
                            cod: "ART-001",
                            des: "matita",
                            prezzo_unitario: 0.85
                        },
                        {
                            cod: "ART-002",
                            des: "gomma",
                            prezzo_unitario: 1.20
                        },
                        {
                            cod: "ART-003",
                            des: "astuccio",
                            prezzo_unitario: 5.00
                        },
                        {
                            cod: "ART-004",
                            des: "zaino tracolla",
                            prezzo_unitario: 29.90
                        },
                        {
                            cod: "ART-005",
                            des: "zaino spalla",
                            prezzo_unitario: 35.90
                        }
                    ]
                };
            }
        };
    });
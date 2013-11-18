'use strict';

angular.module('ngCanvasApp.services', []).
    factory('Lezione1Factory', function() {
        return {
            loadMockData: function() {
                return {
                    stage: {
                        container: 'viewerContainer',
                        width: 600,
                        height: 400
                    },
                    shapes: [
                        {
                            type: 'Rect',
                            x: 10,
                            y: 10,
                            width: 100,
                            height: 50,
                            fill: 'red',
                            stroke: 'black',
                            strokeWidth: 1,
                            metadata: {
                                cod: 'RECT_01',
                                des: 'Primo rettangolo'
                            }
                        },
                        {
                            type: 'Rect',
                            x: 120,
                            y: 10,
                            width: 100,
                            height: 50,
                            fill: 'green',
                            stroke: 'black',
                            strokeWidth: 1,
                            metadata: {
                                cod: 'RECT_02',
                                des: 'Secondo rettangolo'
                            }
                        },
                        {
                            type: 'Circle',
                            x: 280,
                            y: 55,
                            radius: 50,
                            fill: 'yellow',
                            stroke: 'black',
                            strokeWidth: 2,
                            metadata: {
                                cod: 'CIRC_01',
                                des: 'Primo cerchio'
                            }
                        },
                        {
                            type: 'Polygon',
                            points: [340, 10, 450, 20, 490, 100, 450, 80, 400, 65, 340, 10],
                            fill: 'blue',
                            stroke: 'black',
                            strokeWidth: 2,
                            metadata: {
                                cod: 'POLY_01',
                                des: 'Primo poligono'
                            }                            
                        }
                    ]
                };
            }
        };
    }).
    factory('Lezione2Factory', function() {
        return {
            loadMockData: function() {
                return {
                    stage: {
                        container: 'viewerContainer',
                        width: 600,
                        height: 400
                    },
                    layers: [
                        {
                            shapes: [
                                {
                                    type: 'Rect',
                                    x: 10,
                                    y: 10,
                                    width: 200,
                                    height: 100,
                                    stroke: 'black',
                                    strokeWidth: 1,
                                },
                                {
                                    type: 'Rect',
                                    x: 220,
                                    y: 10,
                                    width: 200,
                                    height: 100,
                                    stroke: 'black',
                                    strokeWidth: 1,
                                }
                            ]
                        },
                        {
                            fillings: [25, 75]
                        }
                    ]
                }
            }
        };
    });
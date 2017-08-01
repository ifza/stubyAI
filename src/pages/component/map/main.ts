import { Component, ViewChild, ElementRef } from '@angular/core';
declare var BMap;
@Component({
    templateUrl:'index.html'
})

export class Map{
    @ViewChild('map') mapElement: ElementRef;
    constructor(){
        console.log('components-map')
    }
    ionViewWillEnter(){
        console.log('map-init')
        var map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);   
    }
}
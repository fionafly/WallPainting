// 将 COCO 数据放入变量中
const cocoData = {
    "info": {
        "description": "coco from ISAT", 
        "version": null, 
        "year": null, 
        "contributor": null, 
        "date_created": null}, 
        "licenses": [{
            "url": null, 
            "id": 0, 
            "name": null}], 
            "images": [{
                "license": "", 
                "url": "", 
                "file_name": "p60.png", 
                "height": 1543, 
                "width": 1378, 
                "date_captured": "", 
                "id": 0}], 
                "annotations": [{
                    "iscrowd": false, 
                    "image_id": 0, 
                    "image_name": "p60.png", 
                    "category_id": 1, 
                    "id": 0, 
                    "segmentation": [[532.0, 159.0, 498.0, 172.0, 456.0, 205.0, 448.0, 206.0, 436.0, 196.0, 427.0, 196.0, 423.0, 214.0, 417.0, 222.0, 408.0, 227.0, 389.0, 222.0, 384.0, 237.0, 378.0, 242.0, 364.0, 243.0, 346.0, 238.0, 336.0, 245.0, 336.0, 256.0, 346.0, 262.0, 343.0, 269.0, 359.0, 279.0, 357.0, 288.0, 341.0, 288.0, 340.0, 299.0, 352.0, 298.0, 352.0, 309.0, 358.0, 309.0, 366.0, 316.0, 365.0, 327.0, 348.0, 355.0, 352.0, 382.0, 339.0, 393.0, 331.0, 406.0, 316.0, 416.0, 311.0, 430.0, 292.0, 444.0, 289.0, 477.0, 277.0, 498.0, 255.0, 503.0, 246.0, 510.0, 242.0, 533.0, 224.0, 544.0, 218.0, 553.0, 217.0, 575.0, 195.0, 580.0, 190.0, 592.0, 189.0, 611.0, 198.0, 631.0, 197.0, 647.0, 221.0, 667.0, 208.0, 682.0, 207.0, 694.0, 170.0, 752.0, 158.0, 784.0, 162.0, 859.0, 185.0, 909.0, 211.0, 913.0, 343.0, 908.0, 536.0, 912.0, 601.0, 907.0, 613.0, 910.0, 644.0, 906.0, 661.0, 886.0, 664.0, 871.0, 657.0, 866.0, 651.0, 837.0, 663.0, 810.0, 678.0, 793.0, 701.0, 727.0, 708.0, 720.0, 719.0, 696.0, 725.0, 664.0, 715.0, 647.0, 701.0, 649.0, 702.0, 635.0, 698.0, 630.0, 675.0, 628.0, 665.0, 619.0, 661.0, 600.0, 653.0, 600.0, 642.0, 592.0, 635.0, 569.0, 625.0, 558.0, 623.0, 543.0, 626.0, 531.0, 611.0, 533.0, 601.0, 522.0, 604.0, 507.0, 599.0, 501.0, 601.0, 483.0, 596.0, 478.0, 595.0, 466.0, 574.0, 457.0, 573.0, 438.0, 566.0, 424.0, 556.0, 413.0, 535.0, 400.0, 531.0, 333.0, 540.0, 316.0, 542.0, 261.0, 552.0, 243.0, 559.0, 208.0, 549.0, 203.0, 542.0, 172.0, 532.0, 166.0]], 
                    "area": 261462.5, 
                    "bbox": [157.50070959766109, 158.35440534944115, 567.9907264958061, 755.1452363354535],
                    "description":'男者肤色为白色，头发为蓝色，戴宝冠，发佩披带，饰大耳环，右手托花盘，左手轻轻搭在女伎乐的肩上'
                }, 
                    {"iscrowd": false, 
                        "image_id": 0, 
                        "image_name": "p60.png", 
                        "category_id": 1, 
                        "id": 1, 
                        "segmentation": [[752.0, 184.0, 741.0, 195.0, 737.0, 206.0, 727.0, 207.0, 727.0, 212.0, 737.0, 206.0, 745.0, 218.0, 745.0, 238.0, 735.0, 245.0, 740.0, 256.0, 733.0, 275.0, 713.0, 298.0, 695.0, 304.0, 692.0, 311.0, 667.0, 328.0, 661.0, 341.0, 675.0, 407.0, 685.0, 423.0, 687.0, 436.0, 682.0, 543.0, 671.0, 609.0, 685.0, 616.0, 698.0, 614.0, 702.0, 603.0, 717.01, 556.34, 753.51, 600.31, 751.65, 614.35, 746.83, 624.99, 745.39, 632.25, 742.0, 638.0, 742.0, 644.0, 737.0, 651.0, 735.55, 662.03, 734.0, 669.0, 734.0, 684.0, 719.0, 702.0, 718.0, 714.0, 710.0, 725.0, 706.29, 735.63, 701.0, 745.0, 698.0, 761.0, 682.0, 794.0, 658.0, 811.0, 637.0, 889.0, 652.0, 892.0, 653.0, 869.0, 656.0, 884.0, 649.0, 901.0, 684.0, 908.0, 769.0, 911.0, 830.0, 904.0, 854.0, 914.0, 998.0, 907.0, 1022.0, 909.0, 1040.0, 916.0, 1110.0, 898.0, 1156.0, 901.0, 1204.0, 891.0, 1208.0, 845.0, 1204.0, 762.0, 1193.0, 728.0, 1193.0, 714.0, 1200.0, 696.0, 1196.0, 677.0, 1183.0, 672.0, 1179.0, 655.0, 1166.0, 654.0, 1134.0, 681.0, 1129.0, 678.0, 1124.0, 682.0, 1116.0, 665.0, 1113.0, 668.0, 1101.0, 599.0, 1092.5, 582.01, 1087.23, 577.9, 1084.73, 583.29, 1076.83, 600.28, 1053.37, 597.61, 1037.03, 594.84, 1020.6, 547.03, 1022.09, 549.35, 1022.27, 524.64, 1016.82, 520.16, 1014.01, 505.45, 1011.88, 492.84, 1008.57, 483.94, 1007.09, 476.13, 1005.42, 468.34, 1001.84, 458.73, 997.51, 448.72, 978.15, 432.71, 948.1, 417.64, 962.16, 396.56, 963.48, 388.06, 966.19, 378.47, 952.08, 349.46, 960.51, 327.84, 1002.76, 286.99, 980.0, 273.0, 926.0, 265.0, 899.0, 242.0, 866.0, 242.0, 842.0, 232.0, 835.0, 214.0, 819.0, 201.0, 812.0, 186.0, 798.0, 191.0, 778.0, 178.0]], 
                        "area": 260907.87557748944, 
                        "bbox": [636.5171921207397, 177.30828401655197, 571.9822282529243, 739.1759624497464],
                        "description":'女伎乐怀抱弓形箜篌，左手执琴身，右手弹拨琴弦，与男伎乐相望'
                    }], 
                        "categories": [{
                            "name": 
                            "person", 
                            "id": 1, 
                            "supercategory": null}]};

// 初始化画布
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const infoBox = document.getElementById('info-box');


// 加载图像
const img = new Image();
img.src = "p60.png";



// 图像加载完毕后执行
img.onload = () => {
    // 绘制图像
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 添加鼠标移动事件监听器
    canvas.addEventListener('mousemove', (event) => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        let activeAnnotation = null;

        // 遍历每个注释
        cocoData.annotations.forEach(annotation => {
            const segmentation = annotation.segmentation[0];
            ctx.beginPath();
            for (let i = 0; i < segmentation.length; i += 2) {
                const x = (segmentation[i] / cocoData.images[0].width) * canvas.width;
                const y = (segmentation[i + 1] / cocoData.images[0].height) * canvas.height;
                ctx.lineTo(x, y);
            }
            ctx.closePath();

            // 检测鼠标是否在区域内
            if (ctx.isPointInPath(mouseX, mouseY)) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // 高亮显示颜色
                activeAnnotation = annotation;
            } else {
                ctx.fillStyle = 'rgba(255, 0, 0, 0)'; // 取消高亮
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 重绘图像

            // 绘制所有注释，显示高亮区域
            cocoData.annotations.forEach(annotation => {
                const segmentation = annotation.segmentation[0];
                ctx.beginPath();
                for (let i = 0; i < segmentation.length; i += 2) {
                    const x = (segmentation[i] / cocoData.images[0].width) * canvas.width;
                    const y = (segmentation[i + 1] / cocoData.images[0].height) * canvas.height;
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.fillStyle = activeAnnotation === annotation ? 'rgba(255, 0, 0, 0.3)' : 'rgba(255, 0, 0, 0)'; // 高亮区域
                ctx.fill();

                // 显示注释信息
                if (activeAnnotation) {
                    const infoBoxX = mouseX + 10;
                    const infoBoxY = mouseY + 10;
                    infoBox.style.left = `${infoBoxX}px`;
                    infoBox.style.top = `${infoBoxY}px`;
                    infoBox.textContent = activeAnnotation.description; // 显示注释
                    infoBox.style.display = 'block';
                } else {
                    infoBox.style.display = 'none'; // 隐藏注释框
                }
            });
        });
    });

    // 添加点击事件监听器
    canvas.addEventListener('click', (event) => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        cocoData.annotations.forEach(annotation => {
            const segmentation = annotation.segmentation[0];
            ctx.beginPath();
            for (let i = 0; i < segmentation.length; i += 2) {
                const x = (segmentation[i] / cocoData.images[0].width) * canvas.width;
                const y = (segmentation[i + 1] / cocoData.images[0].height) * canvas.height;
                ctx.lineTo(x, y);
            }
            ctx.closePath();

            if (ctx.isPointInPath(mouseX, mouseY)) {
                infoBox.textContent = annotation.description; // 显示解释
            }
        });
    });
};
// 将 COCO 数据放入变量中
const cocoData = {
    "info": {
        "description": "coco from ISAT", 
        "version": null, 
        "year": null, 
        "contributor": null, 
        "date_created": null
    }, 
    "licenses": [{
        "url": null, 
        "id": 0, 
        "name": null}], 
    "images": [{
        "license": "", 
        "url": "", 
        "file_name": "p60.png", 
        "height": 7715, 
        "width": 6890, 
        "date_captured": "", 
        "id": 0}], 
    "annotations": [{
        "iscrowd": false, 
        "image_id": 0, 
        "image_name": "p60.png", 
        "category_id": 1, 
        "id": 0, 
        "segmentation": [[3486.47, 733.73, 3335.47, 718.73, 3275.47, 633.73, 3154.47, 534.73, 3025.47, 510.73, 3003.47, 542.73, 2870.47, 572.73, 2803.47, 666.73, 2717.47, 691.73, 2667.47, 753.73, 2410.47, 923.73, 2306.47, 1021.73, 2242.47, 1035.73, 2153.47, 979.73, 2128.47, 993.73, 2081.47, 1115.73, 2032.47, 1138.73, 1979.47, 1113.73, 1949.47, 1122.73, 1905.47, 1220.73, 1821.47, 1226.73, 1738.47, 1195.73, 1683.47, 1231.73, 1683.47, 1321.73, 1799.47, 1417.73, 1839.47, 1620.73, 1832.47, 1663.73, 1742.47, 1774.73, 1745.47, 1954.73, 1670.47, 2048.73, 1614.47, 2079.73, 1572.47, 2161.73, 1488.47, 2252.73, 1450.47, 2424.73, 1401.47, 2442.73, 1369.47, 2518.73, 1280.47, 2523.73, 1232.47, 2557.73, 1216.47, 2681.73, 1133.47, 2715.73, 1080.47, 2771.73, 1069.47, 2886.73, 1036.47, 2877.73, 954.47, 2916.73, 930.47, 3005.73, 939.47, 3118.73, 852.47, 3247.73, 917.47, 3448.73, 931.47, 3403.73, 959.47, 3399.73, 957.47, 3504.73, 984.47, 3528.73, 825.47, 3820.73, 786.47, 3947.73, 799.47, 4280.73, 881.47, 4520.73, 916.47, 4568.73, 2069.47, 4571.73, 2184.47, 4535.73, 2312.47, 4558.73, 2580.47, 4535.73, 2669.47, 4560.73, 2945.47, 4554.73, 2993.47, 4514.73, 3026.47, 4298.73, 3062.98, 4374.21, 3081.53, 4489.44, 3112.0, 4509.15, 3159.97, 4506.61, 3189.76, 4366.27, 3217.27, 4199.16, 3282.73, 4073.83, 3304.27, 4060.73, 3321.98, 4035.4, 3348.76, 4025.18, 3364.59, 3998.95, 3365.47, 3968.73, 3385.47, 3879.73, 3436.47, 3851.73, 3505.47, 3646.73, 3549.47, 3608.73, 3605.47, 3495.73, 3618.47, 3282.73, 3506.47, 3156.73, 3353.47, 3126.73, 3307.47, 3003.73, 3213.47, 2959.73, 3186.47, 2863.73, 3145.47, 2804.73, 3143.47, 2734.73, 3167.47, 2675.73, 3257.47, 2588.73, 3300.47, 2373.73, 3388.47, 2348.73, 3414.47, 2320.73, 3420.47, 2191.73, 3375.47, 2042.73, 3372.47, 1958.73, 3317.47, 1920.73, 3287.47, 1750.73, 3302.47, 1686.73, 3390.47, 1584.73, 3487.47, 1540.73, 3606.47, 1445.73, 3662.47, 1321.73, 3608.47, 921.73]], 
        "area": 7934132.2571353745, 
        "bbox": [785.9659458515466, 510.2396651356297, 2876.995124520546, 4061.9915633322685],
        "description": "男者肤色为白色，头发为蓝色，戴宝冠，发佩披带，饰大耳环，右手托花盘，左手轻轻搭在女伎乐的肩上"  // 注释内容
    
    }, 
        {"iscrowd": false, 
            "image_id": 0, 
            "image_name": "\u56fe\u7247p60.png", 
            "category_id": 1, 
            "id": 1, 
            "segmentation": [[3757.0, 921.0, 3699.0, 1015.0, 3736.0, 1159.0, 3729.0, 1244.0, 3675.0, 1337.0, 3641.0, 1445.0, 3523.0, 1557.0, 3418.0, 1586.0, 3327.0, 1704.0, 3414.0, 1909.0, 3482.0, 1944.0, 3541.0, 2004.0, 3570.0, 2067.0, 3614.0, 2448.0, 3619.0, 2816.0, 3639.0, 2873.0, 3727.0, 2960.0, 3749.0, 3061.0, 3676.0, 3430.0, 3638.0, 3511.0, 3637.0, 3598.0, 3606.0, 3572.0, 3598.0, 3694.0, 3471.0, 3874.0, 3437.0, 3964.0, 3287.0, 4118.0, 3265.0, 4210.0, 3324.0, 4388.0, 3323.0, 4441.0, 3389.0, 4530.0, 3507.0, 4545.0, 3879.0, 4552.0, 4143.0, 4517.0, 4295.0, 4570.0, 4419.0, 4566.0, 4511.0, 4530.0, 4835.0, 4546.0, 4995.0, 4534.0, 5205.0, 4563.0, 5315.0, 4552.0, 5408.0, 4514.0, 5519.0, 4353.0, 5488.0, 3837.0, 5533.0, 3634.0, 5519.0, 3596.0, 5551.0, 3325.0, 5442.0, 2785.0, 5469.0, 2674.0, 5461.0, 2569.0, 5570.0, 1970.0, 5556.0, 1751.0, 5520.0, 1690.0, 5450.0, 1641.0, 5265.0, 1573.0, 5221.0, 1637.0, 5229.0, 1737.0, 5169.0, 1745.0, 5127.0, 1678.0, 5083.0, 1462.0, 5021.0, 1395.0, 4914.0, 1351.0, 4642.0, 1319.0, 4508.0, 1208.0, 4355.0, 1207.0, 4263.0, 1187.0, 4201.0, 1144.0, 4177.0, 1063.0, 4104.0, 1011.0, 4056.0, 916.0, 3972.0, 947.0, 3908.0, 889.0, 3873.0, 884.0, 3810.0, 930.0]], 
            "area": 6417158.0, 
            "bbox": [3264.5137105541726, 883.5050252531694, 2305.9852709031547, 3686.994714804001],
            "description": "女伎乐怀抱弓形箜篌，左手执琴身，右手弹拨琴弦，与男伎乐相望"  // 注释内容
        }], 
            "categories": [{
                "name": "person", 
                "id": 1, 
                "supercategory": null}]};

// 初始化画布
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const infoBox = document.getElementById('info-box');

// 注释内容
const descriptions = [
    '男者肤色为白色，头发为蓝色，戴宝冠，发佩披带，饰大耳环，右手托花盘，左手轻轻搭在女伎乐的肩上',
    '女伎乐怀抱弓形箜篌，左手执琴身，右手弹拨琴弦，与男伎乐相望'
];


// 加载图像
const img = new Image();
img.src = "clear_wallPainting\\p60.png";



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
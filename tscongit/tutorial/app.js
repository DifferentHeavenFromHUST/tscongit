PIXI.utils.sayHello();

// Xét kích thước cho thẻ div ở HTML. Mọi hoạt động sẽ nằm trong thẻ div này.
var renderer = PIXI.autoDetectRenderer(512,512,{
    transparent: true,
    resolution: 1
});
document.getElementById(‘display’).appendChild(renderer.view);

// Tạo object stage gọi link ảnh.
var stage = new PIXI.Container();
PIXI.loader
    .add(“images/rat.png”)
.load(setup);

var rat;

// Hàm cài đặt. Đưa hình vào như một sprite, xét kích cỡ, anchor point, scale và gọi hàm vòng lặp animation
function setup() {
    rat = new PIXI.Sprite(
        PIXI.loader.resources[“images/rat.png”].texture
)

    stage.addChild(rat);
    rat.anchor.set(0.5, 0.5);
    rat.scale.set(0.4, 0.4);
    rat.x = renderer.width / 2;
    rat.y = renderer.height / 2;

    animationLoop();
};

// Vòng lặp animation. Mỗi lần lặp, hình ảnh sẽ quay 0.01 độ
function animationLoop() {
    requestAnimationFrame(animationLoop);

    rat.rotation += 0.01;

    renderer.render(stage);
}
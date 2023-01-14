var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var teclaEspacio;
var persona;

var juego = new Phaser.Game(500, 256, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal = {
	preload: function(){
		// juego.state.backgroundColor="#ABC123";
		juego.load.image('fondo', 'img/fondo.png');
		juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
		juego.load.spritesheet('personas', 'img/finn.png',32,32);
		// juego.load.image('btn', 'img/btn.png');

	},
	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,500,256,'fondo');
		// flappy = juego.add.sprite(100,100,'pajaros');
		// flappy.frame = 1;
		// flappy.animations.add('vuelo',[0,1,2],10,true);

		persona = juego.add.sprite(juego.width/2,juego.height/2,'personas');
		persona.anchor.setTo(0.5);
		persona.animations.add('vuelva',[0,1,2,3,4,5,6,7],10,true);
		persona.animations.add('arriba',[40,41,42,43,44,45],10,true);
		persona.animations.add('izquierda',[56,57,58,59,60,61],10,true);
		persona.animations.add('abajo',[8,9,10,11,12,13],10,true);
		persona.animations.add('derecha',[24,25,26,27,28,29],10,true);

		teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		teclaEspacio = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		juego.physics.startSystem(Phaser.Physics.ARCADE);
		// juego.physics.arcade.enable(flappy);
		// flappy.body.collideWorldBounds = true;
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds = true;

		// flappy = juego.add.sprite(juego.width/2,juego.height/2,'pajaro');
		// boton = juego.add.sprite(juego.width/2, juego.height/2,'btn');
		// boton.anchor.setTo(0.5,0.5);
		// flappy.anchor.setTo(0.5);
		// flappy.scale.setTo(-1,1);
		// flappy.angle = 90;
	},
	update: function(){
		
		fondoJuego.tilePosition.x-=1;
		// flappy.angle+=0.2;
		// flappy.animations.play('vuelo');
		if (teclaDerecha.isDown) {
			// flappy.x++;
			persona.position.x+=2;
			persona.animations.play('derecha');
		} else if (teclaIzquierda.isDown) {
			// flappy.x--;
			persona.position.x-=2;
			persona.animations.play('izquierda');
		} else if (teclaArriba.isDown) {
			// flappy.y--;
			persona.position.y-=2;
			persona.animations.play('arriba');
		} else if (teclaAbajo.isDown) {
			// flappy.y++;
			persona.position.y+=2;
			persona.animations.play('abajo');
		} else if (teclaEspacio.isDown) {
			persona.animations.play('vuelva');
		}
	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
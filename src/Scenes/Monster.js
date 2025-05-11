class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftArmX = this.bodyX - 100;//200;
        this.leftArmY = this.bodyY + 25//375;
        this.rightArmX = this.bodyX + 100;//400;
        this.rightArmY = this.bodyY + 25;// 375;
        this.leftLegX = this.bodyX - 50//250;
        this.leftLegY = this.bodyY + 125;//475;
        this.rightLegX = this.bodyX + 75;//375;
        this.rightLegY = this.bodyY + 125;//475;
        this.eyeX = this.bodyX;//300
        this.eyeY = this.bodyY - 50;//100;
        this.mouthX = this.bodyX;//300
        this.mouthY = this.bodyY + 50;
        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 10;//150;
        this.antennaX = this.bodyX + 5;
        this.antennaY = this.bodyY - 105;//150;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenD.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenD.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_yellow.png");
        my.sprite.smileMouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangMouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");
        my.sprite.fangMouth.visible = false;
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png");
        my.sprite.antenna = this.add.sprite(this.antennaX, this.antennaY, "monsterParts", "detail_green_antenna_small.png");
        
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) => {
            //Make The smile visible, and fangs invisible
            my.sprite.fangMouth.visible = false;
            my.sprite.smileMouth.visible = true;
        });
 
        //Event Input: regular smile
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            //Make The smile invisible, and fangs visible
            my.sprite.smileMouth.visible = false;
            my.sprite.fangMouth.visible = true;

        });
        if(this.aKey.isDown) { 
            //Move to the left
            
            my.sprite.body.x = my.sprite.body.x - 5;
            my.sprite.leftArm.x = my.sprite.leftArm.x - 5;            
            my.sprite.rightArm.x = my.sprite.rightArm.x - 5;
            my.sprite.leftLeg.x = my.sprite.leftLeg.x - 5;
            my.sprite.rightLeg.x = my.sprite.rightLeg.x - 5;
            my.sprite.eye.x = my.sprite.eye.x - 5;
            my.sprite.smileMouth.x = my.sprite.smileMouth.x - 5;
            my.sprite.fangMouth.x = my.sprite.fangMouth.x - 5;
            my.sprite.nose.x = my.sprite.nose.x - 5;
            my.sprite.antenna.x = my.sprite.antenna.x - 5;
        }
        else if(Phaser.Input.Keyboard.JustUp(this.aKey)) { 
            //Stop moving to the left
            
        }
        if(this.dKey.isDown) {

            
            my.sprite.body.x = my.sprite.body.x + 5;
            my.sprite.leftArm.x = my.sprite.leftArm.x + 5;            
            my.sprite.rightArm.x = my.sprite.rightArm.x + 5;
            my.sprite.leftLeg.x = my.sprite.leftLeg.x + 5;
            my.sprite.rightLeg.x = my.sprite.rightLeg.x + 5;
            my.sprite.eye.x = my.sprite.eye.x + 5;
            my.sprite.smileMouth.x = my.sprite.smileMouth.x + 5;
            my.sprite.fangMouth.x = my.sprite.fangMouth.x + 5;
            my.sprite.nose.x = my.sprite.nose.x + 5;
            my.sprite.antenna.x = my.sprite.antenna.x + 5;
            /*
            my.sprite.body.velocity.x = 1;
            my.sprite.leftArm.velocity.x = 1;            
            my.sprite.rightArm.velocity.x = 1;
            my.sprite.leftLeg.velocity.x = 1;
            my.sprite.rightLeg.velocity.x = 1;
            my.sprite.eye.velocity.x = 1;
            my.sprite.smileMouth.velocity.x = 1;
            my.sprite.fangMouth.velocity.x = 1;
            my.sprite.nose.velocity.x = 1;
            my.sprite.antenna.velocity.x = 1;
            for (part in my.sprite) {
                part.x = part.x + 20;      
            }
            */
            

        }
       else if(Phaser.Input.Keyboard.JustUp(this.dKey)) {
            
            my.sprite.body.velocity.x = 0;
            my.sprite.leftArm.velocity.x = 0;            
            my.sprite.rightArm.velocity.x = 0;
            my.sprite.leftLeg.velocity.x = 0;
            my.sprite.rightLeg.velocity.x = 0;
            my.sprite.eye.velocity.x = 0;
            my.sprite.smileMouth.velocity.x = 0;
            my.sprite.fangMouth.velocity.x = 0;
            my.sprite.nose.velocity.x = 0;
            my.sprite.antenna.velocity.x = 0;
            
        }
    }

}
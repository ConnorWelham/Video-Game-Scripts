var AudioTimer : float = 0;


var GravelSound: AudioClip;
var MetalSound: AudioClip;
var GroundSound: AudioClip;
var jumpsound : AudioClip;
var Gravelland: AudioClip; 
var Metalland : AudioClip; 
var Groundland: AudioClip;


private var chCtrl: CharacterController;
private var jumping : boolean = false;

public var justjumped: boolean = false;
public var justlanded: boolean = false;
public var IsGrounded: boolean = true;


function Update () {
	if(AudioTimer > 0)
	{
	AudioTimer -= Time.deltaTime;
	}

	if (AudioTimer < 0)
	{
	AudioTimer = 0;
	}


}






function OnControllerColliderHit (col: ControllerColliderHit)
{
if(IsGrounded == true & jumping == true)   //switch between being Grounded and jumping//
{

jumping = false;
justjumped = false;
justlanded = true;
}




if (col.gameObject.CompareTag("Terrain") || col.gameObject.CompareTag("Gravel") || col.gameObject.CompareTag("Metal"))
{


IsGrounded = true;

}

		if (col.gameObject.CompareTag("Gravel") && justlanded == true)
{
 			GetComponent.<AudioSource>().clip = Gravelland;
 			GetComponent.<AudioSource> ().volume = Random.Range (0.9f, 1);
			GetComponent.<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
 			GetComponent.<AudioSource>().PlayOneShot(Gravelland);

 			justlanded = false;
 		

}



		if (col.gameObject.CompareTag("Terrain") && justlanded == true)
{
 			GetComponent.<AudioSource>().clip = Groundland;
 			GetComponent.<AudioSource> ().volume = Random.Range (0.9f, 1);
			GetComponent.<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
 			GetComponent.<AudioSource>().PlayOneShot(Groundland);

 			justlanded = false;
 		

}


		if (col.gameObject.CompareTag("Metal") && justlanded == true)
{
 			GetComponent.<AudioSource>().clip = Metalland;
 			GetComponent.<AudioSource> ().volume = Random.Range (0.9f, 1);
			GetComponent.<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
 			GetComponent.<AudioSource>().PlayOneShot(Metalland);

 			justlanded = false;
 		

}




 if (col.gameObject.CompareTag("Terrain") && Input.GetAxis ("Vertical") && AudioTimer == 0 ||
 col.gameObject.CompareTag("Terrain") && Input.GetAxis ("Horizontal") && AudioTimer == 0)
{
 			GetComponent.<AudioSource>().clip = GroundSound;
 			GetComponent.<AudioSource> ().volume = Random.Range (0.9f, 1);
			GetComponent.<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
 			GetComponent.<AudioSource>().PlayOneShot(GroundSound);

 AudioTimer = 0.4;

}

 else if (col.gameObject.CompareTag("Gravel") && Input.GetAxis ("Vertical") && AudioTimer == 0 ||
 col.gameObject.CompareTag("Gravel") && Input.GetAxis ("Horizontal") && AudioTimer == 0)
 {
 		GetComponent.<AudioSource>().clip = GravelSound;
 		GetComponent.<AudioSource>().volume = Random.Range (0.9f, 1);
		GetComponent.<AudioSource>().pitch = Random.Range (0.95f, 1.05f);
 		GetComponent.<AudioSource>().PlayOneShot(GravelSound);




 AudioTimer = 0.4;

 }

 else if (col.gameObject.CompareTag("Metal") && Input.GetAxis ("Vertical") && AudioTimer == 0 ||
 col.gameObject.CompareTag("Metal") && Input.GetAxis ("Horizontal") && AudioTimer == 0)

{
 			GetComponent.<AudioSource>().clip = MetalSound;
 			GetComponent.<AudioSource>().volume = Random.Range (0.9f, 1);
			GetComponent.<AudioSource>().pitch = Random.Range (0.95f, 1.05f);
 			GetComponent.<AudioSource>().PlayOneShot(MetalSound);

 AudioTimer = 0.4;

 }

  else if (Input.GetButtonDown("Jump") && IsGrounded == true)
    {
        GetComponent.<AudioSource>().PlayOneShot(jumpsound, 0.8f);
        jumping = true; // tell the script that the player has jumped
        justjumped = true;
        IsGrounded = false;

        AudioTimer = 0.4;


   }    

}




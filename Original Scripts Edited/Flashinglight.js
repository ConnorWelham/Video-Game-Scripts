var Flashinglight : Light;
Flashinglight.enabled = true;
 @script RequireComponent( AudioSource );

var LightSound: AudioClip;

function Start()
{
			GetComponent.<AudioSource>().clip = LightSound;
}

function Update()
{

 			GetComponent.<AudioSource> ().volume = Random.Range (0.2f, 0.5);
			GetComponent.<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);

}


function FixedUpdate () {


var RandomNumber = Random.value;

	if(RandomNumber<=.1){	//change lower less flashing
	GetComponent.<AudioSource>().PlayOneShot(LightSound);
	Flashinglight.enabled = false;
	}

	else Flashinglight.enabled=true;
	{


	}



}





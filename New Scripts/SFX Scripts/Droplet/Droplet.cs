using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class Droplet : MonoBehaviour {

	public float AudioTimer = 0;

	public AudioClip[] DropletSounds;
	public AudioSource DropletSource;

	public bool Played = false; 
	public bool Now = false;

	// Use this for initialization
	void Start () {
	
		DropletSource = GameObject.Find ("WaterDrop").GetComponent<AudioSource> ();

		AudioTimer = Random.Range (0, 3);


	}


	void Update () {
		if (AudioTimer > 0) {
			AudioTimer -= Time.deltaTime;
		}

		if (AudioTimer < 0) {
			AudioTimer = 0;
		}

		if (AudioTimer == 0) {
			PlaySound ();
		}
	}



	
	// Update is called once per frame
	void PlaySound () {


		if (Played == false && AudioTimer == 0)
		{
			

			int randClip = Random.Range (0, DropletSounds.Length);

			DropletSource.clip = DropletSounds [randClip];
			DropletSource.Play ();

			GetComponent<AudioSource>().volume = Random.Range (0.9f, 1);
			GetComponent<AudioSource>().pitch = Random.Range (0.95f, 1.05f);



			AudioTimer = Random.Range (0, 3);

		}


	}



}


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(CapsuleCollider))]


public class BarrelHit : MonoBehaviour 
{


	public AudioClip BarrelSound;
	public AudioSource sound;
	public CapsuleCollider Trigger;


	// Use this for initialization
	void Start () 
	{
		sound = GetComponent<AudioSource> ();
		CapsuleCollider Trigger = gameObject.GetComponent<CapsuleCollider> (); 


		Trigger.radius = 0.63f;
		Trigger.height = 2.6f;
		Trigger.isTrigger = true;

	}
	
	private void OnTriggerEnter(Collider col)
	{
		if(col.gameObject.tag == "Player")
		{
			Debug.Log ("TUWANGG");
			//play sound here

			sound.PlayOneShot(BarrelSound);
			GetComponent<AudioSource> ().volume = Random.Range (0.3f, 0.4f);
			GetComponent<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
		}
	}
}


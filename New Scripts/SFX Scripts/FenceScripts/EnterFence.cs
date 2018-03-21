using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnterFence : MonoBehaviour 
{
	public AudioClip FenceHit;
	public AudioSource Sound;

	void Start ()
	{
		Sound = GetComponent<AudioSource> ();

	}


	private void OnTriggerEnter(Collider col)
	{
		if(col.gameObject.tag == "Player")
		{
		Debug.Log ("Play sound now");
		//play sound here


			Sound.PlayOneShot(FenceHit);
			GetComponent<AudioSource> ().volume = Random.Range (0.9f, 1);
			GetComponent<AudioSource> ().pitch = Random.Range (0.95f, 1.05f);
		}
	}
}

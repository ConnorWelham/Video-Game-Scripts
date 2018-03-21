using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DialogueScript : MonoBehaviour {

	public AudioClip dialogue;
	public AudioSource audioo;
	public bool alreadyPlayed = false;


	// Use this for initialization
	void Start () {
	}

	// Update is called once per frame
	void OnTriggerEnter () {
		if (!alreadyPlayed) 
		{
			audioo.PlayOneShot (dialogue, 1f);
			alreadyPlayed = true;
		}
	}
}
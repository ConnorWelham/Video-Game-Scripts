using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomPitch : MonoBehaviour {

	// Use this for initialization
	void Start () {
	}

	// Update is called once per frame
	void Update () {
		GetComponent<AudioSource>().volume = Random.Range (0.9f, 1);
		GetComponent<AudioSource>().pitch = Random.Range (0.95f, 1.05f);
	}
}

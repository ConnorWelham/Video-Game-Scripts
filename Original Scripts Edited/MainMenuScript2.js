
    var rend : Renderer;

        public var click : AudioClip;
    public var select : AudioClip;
    public var deselect: AudioClip;


    public var source: AudioSource;



    function Start () {
      rend = GetComponent(Renderer);

    }
    function OnMouseEnter()

    {
          	source.clip = select;
 			source.volume = Random.Range (0.9f, 1);
			source.pitch = Random.Range (0.95f, 1.05f);
 			source.PlayOneShot(select);

    rend.material.color = Color.red; //change the color of the text

    }

    function OnMouseExit()

    { rend.material.color = Color.white; //change the colorï»¿ of the text

            source.clip = deselect;
 			source.volume = Random.Range (0.9f, 1);
			source.pitch = Random.Range (0.95f, 1.05f);
 			source.PlayOneShot(deselect);


    }

    function OnMouseUp()
    {
    		source.clip = click;
 			source.volume = Random.Range (0.9f, 1);
			source.pitch = Random.Range (0.95f, 1.05f);
 			source.PlayOneShot(click);


            Application.LoadLevel("instruction");

    }

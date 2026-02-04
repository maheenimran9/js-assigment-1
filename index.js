let weather = prompt (`What is your favorite season? 
    Choose any One of Them..!
    1) Rainy            2) Windy           3) Spring           
    4) Fog              5) Winter          6) Cloudy  
    7) Snow             8) Summer          9) Rainbow
    10) Lightning`).toLowerCase();

if (weather === "rainy") { 
    document.writeln(`
        <section class="rain-sec">
    <div class="rain-card">
      <div class="rain-img">
        <img src="./img/rain-men.jpg" alt="">
      </div>
      <div class="rain-text">
        <p>Spring is the season of new beginnings and colorful beauty. As the cold winter fades away, 
        flowers start to bloom and the trees turn a vibrant green. The air is mild and pleasant, filled 
        with the sweet scent of blossoms and the cheerful chirping of birds. It is a time of hope and 
        growth, making the world feel like a beautiful painting.</p>
      <ul>
        <li><Span>Renewal:</Span> Nature wakes up with colorful flowers and fresh green leaves.</li>
        <li><Span>Mild Weather:</Span> The temperature is perfect—neither too hot nor too cold.</li>
        <li><Span>Vibe:</Span> Joyful, bright, and full of life.</li>
      </ul>
      </div>
    </div>
  </section>
    `);
    console.log("Success: Rainy block executed");
}else if(weather === "spring"){
    document.writeln(`<section class="spring-sec">
    <div class="spring-card">
      <div class="spring-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS-6oBw6Hr37-d8iiHO6_c8c4HfgZjIEupQ&s" alt="">
      </div>
      <div class="spring-text">
        <p>Spring is the season of new life. Flowers bloom, trees turn green, and the air is filled 
        with sweet scents. It is a bright and joyful time when the whole world looks beautiful and 
        fresh.</p>
      <ul>
      <li><Span>Growth:</Span> Nature wakes up with colorful flowers.</li>
      <li><Span>Weather:</Span> Pleasant and mild temperatures.</li>
      <li><Span>Vibe:</Span> Happy and bright.</li>
      </ul>
      </div>
    </div>
  </section>`);
    console.log("Spring");
} else if(weather === "windy"){
    document.writeln(`<section class="windy-sec">
    <div class="windy-card">
      <div class="windy-img">
        <img src="./img/tree-wind.jpg" alt="">
      </div>
      <div class="windy-text">
        <p>Windy weather is full of energy. The cool breeze rustles the leaves and makes the air feel 
        fresh and alive. It’s the perfect time to feel the wind on your face and enjoy nature's power.
        </p>
      <ul>
        <li><Span>Energy:</Span> The breeze makes everything feel lively.</li>
        <li><Span>Freshness:</Span> It clears the air and feels refreshing.</li>
        <li><Span>Vibe:</Span> Active and free.</li>
      </ul>
      </div>
    </div>
  </section>`);
    console.log("Windy");
}else if(weather === "fog"){
    document.writeln(`<section class="fog-sec">
    <div class="fog-card">
      <div class="fog-img">
        <img src="https://i.pinimg.com/736x/d4/2e/38/d42e38e0c0b51232937a288307064266.jpg" alt="">
      </div>
      <div class="fog-text">
        <p>Fog wraps the world in a quiet, white blanket. It creates a dreamy and mysterious atmosphere 
      where everything looks soft and hidden. It’s a peaceful time to stay cozy and enjoy the silence.</p>
      <ul>
        <li><Span>Mystery:</Span> The mist makes things look magical.</li>
        <li><Span>Silence:</Span> Fog makes the world feel calm and quiet.</li>
        <li><Span>Vibe:</Span> Dreamy and cozy.</li>
      </ul>
      </div>
    </div>
  </section>`);
    console.log("Foggy");
}else if(weather === "winter"){
    document.writeln(`<section class="winter-sec">
    <div class="winter-card">
      <div class="winter-img">
        <img src="https://i.pinimg.com/originals/de/69/65/de6965ce15fb800125372d943d4d2566.gif" alt="">
      </div>
      <div class="winter-text">
        <p>Winter is the season of peace and coziness. The air is crisp and cold, making it the perfect 
      time to wrap up in warm clothes and enjoy hot drinks. Whether there is snow or just a chilly 
      breeze, winter brings a calm beauty to the world.</p>
      <ul>
        <li><Span>Coziness:</Span> Perfect for warm blankets and hot chocolate.</li>
        <li><Span>Peace:</Span> The cold air brings a quiet and calm feeling.</li>
        <li><Span>Vibe:</Span> Chill, cozy, and relaxing.</li>
      </ul>
      </div>
    </div>
  </section>`);
    console.log("winter");
}else if(weather === "cloudy"){
    document.writeln(`<section class="cloudy-sec">
    <div class="cloudy-card">
      <div class="cloudy-img">
        <img src="https://i.pinimg.com/736x/11/da/cc/11dacc6d82943cfa132584325ea96ef6.jpg" alt="">
      </div>
      <div class="cloudy-text">
        <p>Cloudy weather brings a soft and gentle light to the world. With the sun hiding behind the 
      clouds, the air feels cooler and the colors of nature look deeper and more peaceful. It is the 
      perfect time for a long walk or a quiet moment to relax without the heat of the sun.</p>
      <ul>
        <li><Span>Comfort:</Span> No harsh sunlight, making it very comfortable to be outside.</li>
        <li><Span>Peace:</Span> The gray sky creates a calm and still atmosphere.</li>
        <li><Span>Vibe:</Span> Mellow, cool, and relaxing.</li>
      </ul>
      </div>
    </div>
  </section>`);
    console.log("cloudy");
}else if( weather === "snow"){
   document.writeln(`<section class="snow-sec">
    <div class="snow-card">
      <div class="snow-img">
        <img src="https://i.pinimg.com/736x/10/0f/da/100fda11919ba3d6d62e5b899fe0698c.jpg" alt="">
      </div>
      <div class="snow-text">
        <p>Snowy weather turns the world into a quiet, white wonderland. The soft falling snow makes 
      everything look peaceful and magical. It’s the perfect time to stay warm inside, watch the snow 
      from your window, or go out and enjoy the crisp, cold air.</p>
      <ul>
        <li><Span>Beauty:</Span> The world looks clean and bright under a blanket of white.</li>
        <li><Span>Fun:</Span> Great for building snowmen or enjoying winter sports.</li>
        <li><Span>Vibe:</Span> Magical, cold, and peaceful.</li>
      </ul>
      </div>
    </div>
  </section>`);
   console.log("Snowy");
} else if(weather === "summer"){
     document.writeln(`<section class="sum-sec">
    <div class="sum-card">
      <div class="sum-img">
        <img src="https://i.pinimg.com/736x/7f/0d/10/7f0d10e28387eb68f8bbdd67d3baf094.jpg" alt="">
      </div>
      <div class="sum-text">
        <p>Snowy weather turns the world into a quiet, white wonderland. The soft falling snow makes 
      everything look peaceful and magical. It’s the perfect time to stay warm inside, watch the snow 
      from your window, or go out and enjoy the crisp, cold air.</p>
      <ul>
        <li><Span>Beauty:</Span> The world looks clean and bright under a blanket of white.</li>
        <li><Span>Fun:</Span> Great for building snowmen or enjoying winter sports.</li>
        <li><Span>Vibe:</Span> Magical, cold, and peaceful.</li>
      </ul>
      </div>
    </div>
  </section>`);
     console.log("Summer");
} else if( weather === "rainbow"){
     document.writeln(`<section class="bow-sec">
    <div class="bow-card">
      <div class="bow-img">
        <img src="https://i.pinimg.com/736x/b6/0a/a7/b60aa7dfa40f938144ccf5b62ce46821.jpg" alt="">
      </div>
      <div class="bow-text">
        <p>A rainbow is nature's most beautiful surprise. It appears when sunlight shines through 
          raindrops, filling the sky with a bright arc of seven colors. It brings a feeling of hope and 
          joy, turning a rainy day into a magical and colorful moment.</p>
      <ul>
        <li><Span>Beauty:</Span> A stunning display of colors across the sky.</li>
        <li><Span>Hope:</Span> Often seen as a symbol of good luck and new beginnings.</li>
        <li><Span>Vibe:</Span> Colorful, magical, and happy.</li>
      </ul>
      </div>
    </div>
  </section>`);
     console.log("Rainbow");
} else if( weather === "lightning"){
  document.writeln(`<section class="light-sec">
    <div class="light-card">
      <div class="light-img">
        <img src="https://i.pinimg.com/736x/a5/3c/17/a53c1793b1ec7d01ec6aee299c145248.jpg" alt="">
      </div>
      <div class="light-text">
        <p>Lightning is a breathtaking display of nature's raw power. It lights up the dark storm clouds 
    with brilliant flashes of electricity, followed by the deep roar of thunder. It is a reminder of how 
    energetic and awe-inspiring the atmosphere can be, making the world feel dramatic and exciting.</p>
      <ul>
        <li><Span>Power:</Span> A massive discharge of electricity that brightens the entire sky.</li>
        <li><Span>Drama:</Span> The combination of light and sound creates an intense experience.</li>
        <li><Span>Vibe:</Span> Intense, powerful, and electrifying.</li>
      </ul>
      </div>
    </div>
  </section>`);
  console.log("Lightning");
}else {
  document.writeln(`<section class="nothing-sec">
  </section>`);
}
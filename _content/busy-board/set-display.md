<div id="busy-board-layouts" class="set-display set-display--matrix" role="group" aria-label="Busy board display forms">
  <div class="set-display-matrix">
    <div class="set-display-matrix__corner" aria-hidden="true"></div>
    <div class="set-display-matrix__col-label">Default layout</div>
    <div class="set-display-matrix__col-label">Activated inputs layout</div>

    <div class="set-display-matrix__row-label">Form A</div>
    <figure class="set-display-matrix__cell">
      <img src="{{ '/assets/images/busy-board/image1a.png' | relative_url }}" alt="Form A, default Busy Board layout">
    </figure>
    <figure class="set-display-matrix__cell">
      <img src="{{ '/assets/images/busy-board/image1b.png' | relative_url }}" alt="Form A, activated inputs layout">
    </figure>

    <div class="set-display-matrix__row-label">Form B</div>
    <figure class="set-display-matrix__cell">
      <img src="{{ '/assets/images/busy-board/image2a.png' | relative_url }}" alt="Form B, default Busy Board layout">
    </figure>
    <figure class="set-display-matrix__cell">
      <img src="{{ '/assets/images/busy-board/image2b.png' | relative_url }}" alt="Form B, activated inputs layout">
    </figure>
  </div>
</div>

{% assign bb = '/assets/images/busy-board/screen_objects/' %}
<details class="io-map-panel">
  <summary class="report-subheading io-map-heading" id="io-form-a-title">
    <span class="io-map-mark" aria-hidden="true"></span>
    <span class="io-map-heading-text">Form A: Input/Output connections</span>
    <span class="io-map-hint io-map-hint--show">(Click here to display)</span>
    <span class="io-map-hint io-map-hint--hide">(Click to hide)</span>
  </summary>
  <section class="io-map" aria-labelledby="io-form-a-title">
  <div class="io-map-scroll">
    <div class="io-board">
      <p class="io-inputs-legend">Input objects</p>
      <p class="io-outputs-legend">Outputs</p>
      <div class="io-rail" aria-hidden="true">
        <span class="io-rail-name"></span>
        <span class="io-rail-state">Off</span>
        <span class="io-rail-link"></span>
        <span class="io-rail-state">On<span class="io-rail-note">(Touched)</span></span>
        <span class="io-rail-arrow"></span>
        <span class="io-rail-outs">
          <span class="io-out-head"></span>
          <span class="io-out-title">&nbsp;</span>
          <span class="io-rail-state">Off</span>
          <span class="io-rail-state">State 1</span>
          <span class="io-rail-state">State 2</span>
          <span class="io-rail-state">State 3</span>
          <span class="io-rail-state">State 4</span>
          <span class="io-rail-state">State 5</span>
          <span class="io-rail-state">State 6</span>
          <span class="io-rail-state">State 7</span>
          <span class="io-rail-state">State 8</span>
          <span class="io-rail-state io-rail-ellipsis" aria-label="States 9 to 15"><span></span><span></span><span></span></span>
          <span class="io-rail-state">State 16</span>
        </span>
      </div>

      <div class="io-col">
        <p class="io-name">Dial</p>
        <div class="io-state">
          <img src="{{ bb | append: 'Input5_dial_0@2x.png' | relative_url }}" alt="Blue dial off, pointer at 0">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'Input5_dial_1@2x.png' | relative_url }}" alt="Blue dial on, pointer at 1">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The dial changes the wheel in a four-state <strong>fixed cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Wheel</p>
          <figure>
            <img src="{{ bb | append: 'Output5_wheel@2x.png' | relative_url }}" alt="Wheel stopped">
            <figcaption>Stopped</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output5_wheel@2x.png' | relative_url }}" alt="Wheel spinning slowly">
            <figcaption>Slow spin</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output5_wheel@2x.png' | relative_url }}" alt="Wheel spinning moderately">
            <figcaption>Moderate spin</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output5_wheel@2x.png' | relative_url }}" alt="Wheel spinning fast">
            <figcaption>Fast Spin</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Slider</p>
        <div class="io-state">
          <img src="{{ bb | append: 'input4_slidertop.png' | relative_url }}" alt="Pink slider off, handle at the top">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'input4_sliderbottom.png' | relative_url }}" alt="Pink slider on, handle at the bottom">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The door opens and reveals animals in a <strong>fixed cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Door</p>
          <figure>
            <img src="{{ bb | append: 'Output4_door_close@2x.png' | relative_url }}" alt="Door closed">
            <figcaption>Closed</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'reindeer_img.png' | relative_url }}" alt="Moose in the open door">
            <figcaption>Open (Moose)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal2_img.png' | relative_url }}" alt="Flamingo in the open door">
            <figcaption>Open (Flamingo)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal3_img.png' | relative_url }}" alt="Zebra in the open door">
            <figcaption>Open (Zebra)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal4_img.png' | relative_url }}" alt="Bear in the open door">
            <figcaption>Open (Bear)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal5_img.png' | relative_url }}" alt="Llama in the open door">
            <figcaption>Open (Llama)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal6_img.png' | relative_url }}" alt="Monkey in the open door">
            <figcaption>Open (Monkey)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal7_img.png' | relative_url }}" alt="Lion in the open door">
            <figcaption>Open (Lion)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'animal8_img.png' | relative_url }}" alt="Hippo in the open door">
            <figcaption>Open (Hippo)</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col io-col--switch io-col--switch-left">
        <p class="io-name io-switch-name">Left switch</p>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, left switch off">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Left switch off">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Middle switch off">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Right switch off">
          </div>
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, left switch on">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_on.png' | relative_url }}" alt="Left switch on">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Middle switch off">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Right switch off">
          </div>
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The red light turns on with <strong>33% probability</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Red light</p>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, all lights off">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_off@2x.png' | relative_url }}" alt="Red light off">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_off@2x.png' | relative_url }}" alt="Green light off">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_off.png' | relative_url }}" alt="Blue light off">
            </div>
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, red light on">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_on@2x.png' | relative_url }}" alt="Red light on">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_off@2x.png' | relative_url }}" alt="Green light off">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_off.png' | relative_url }}" alt="Blue light off">
            </div>
            <figcaption>Probability: 1/3</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col io-col--switch io-col--switch-mid">
        <p class="io-name io-switch-name">Middle switch</p>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, middle switch off">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Left switch off">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Middle switch off">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Right switch off">
          </div>
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, middle switch on">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Left switch off">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_on.png' | relative_url }}" alt="Middle switch on">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Right switch off">
          </div>
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The green light <strong>always</strong> turns on.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Green light</p>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, all lights off">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_off@2x.png' | relative_url }}" alt="Red light off">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_off@2x.png' | relative_url }}" alt="Green light off">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_off.png' | relative_url }}" alt="Blue light off">
            </div>
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, green light on">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_off@2x.png' | relative_url }}" alt="Red light off">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_on@2x.png' | relative_url }}" alt="Green light on">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_off.png' | relative_url }}" alt="Blue light off">
            </div>
            <figcaption>Probability: 1</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col io-col--switch io-col--switch-right">
        <p class="io-name io-switch-name">Right switch</p>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, right switch off">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Left switch off">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Middle switch off">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Right switch off">
          </div>
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <div class="io-switch-assembly" aria-label="Switch panel, right switch on">
            <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
            <img class="io-switch io-switch--left" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Left switch off">
            <img class="io-switch io-switch--mid" src="{{ bb | append: 'Input3_switch_off.png' | relative_url }}" alt="Middle switch off">
            <img class="io-switch io-switch--right" src="{{ bb | append: 'Input3_switch_on.png' | relative_url }}" alt="Right switch on">
          </div>
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The blue light turns on with <strong>66% probability</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Blue light</p>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, all lights off">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_off@2x.png' | relative_url }}" alt="Red light off">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_off@2x.png' | relative_url }}" alt="Green light off">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_off.png' | relative_url }}" alt="Blue light off">
            </div>
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <div class="io-switch-assembly" aria-label="Light panel, blue light on">
              <img class="io-switch-panel" src="{{ bb | append: 'switch_panel@2x.png' | relative_url }}" alt="">
              <img class="io-light io-light--left" src="{{ bb | append: 'Output3_3lights_red_off@2x.png' | relative_url }}" alt="Red light off">
              <img class="io-light io-light--mid" src="{{ bb | append: 'Output3_3lights_green_off@2x.png' | relative_url }}" alt="Green light off">
              <img class="io-light io-light--right" src="{{ bb | append: 'Output3_3lights_blue_on.png' | relative_url }}" alt="Blue light on">
            </div>
            <figcaption>Probability: 2/3</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Purple toggle</p>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Input2_toggle_left@2x.png' | relative_url }}" alt="Purple toggle off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Input2_toggle_right@2x.png' | relative_url }}" alt="Purple toggle on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The emoji changes in a <strong>semirandom cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Emoji</p>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_partyhat@2x.png' | relative_url }}" alt="Party hat emoji">
            <figcaption>Initial state</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_glasses@2x.png' | relative_url }}" alt="Glasses emoji">
            <figcaption>Glasses</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_heart@2x.png' | relative_url }}" alt="Heart eyes emoji">
            <figcaption>Heart eyes</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_glasses@2x.png' | relative_url }}" alt="Glasses emoji">
            <figcaption>Glasses</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_partyhat@2x.png' | relative_url }}" alt="Party hat emoji">
            <figcaption>Party hat</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_smile@2x.png' | relative_url }}" alt="Smiling emoji">
            <figcaption>Smiling</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_heart@2x.png' | relative_url }}" alt="Heart eyes emoji">
            <figcaption>Heart eyes</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_partyhat@2x.png' | relative_url }}" alt="Party hat emoji">
            <figcaption>Party hat</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_smile@2x.png' | relative_url }}" alt="Smiling emoji">
            <figcaption>Smiling</figcaption>
          </figure>
          <p class="io-out-more">The semi-random sequence continues.</p>
          <figure>
            <img src="{{ bb | append: 'Output2_emoji_glasses@2x.png' | relative_url }}" alt="Glasses emoji">
            <figcaption>Glasses</figcaption>
          </figure>
        </div>
      </div>


      <div class="io-col">
        <p class="io-name">Lever</p>
        <div class="io-state">
          <img class="io-green-lever" src="{{ bb | append: 'Input6_crank_handle@2x.png' | relative_url }}" alt="Green lever off, flat">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img class="io-green-lever io-green-lever--on" src="{{ bb | append: 'Input6_crank_handle@2x.png' | relative_url }}" alt="Green lever on, tilted 45 degrees">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The gears spin for varying amounts of time in a <strong>semirandom cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Gears</p>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears static">
            <figcaption>Static</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 1 second">
            <figcaption>1 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 4 seconds">
            <figcaption>4 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 2 seconds">
            <figcaption>2 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 3 seconds">
            <figcaption>3 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 2 seconds">
            <figcaption>2 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 1 second">
            <figcaption>1 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 4 seconds">
            <figcaption>4 sec</figcaption>
          </figure>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 3 seconds">
            <figcaption>3 sec</figcaption>
          </figure>
          <p class="io-out-more">The semi-random sequence continues.</p>
          <figure>
            <img class="io-gears" src="{{ bb | append: 'Output6_crank@2x.png' | relative_url }}" alt="Gears spinning for 2 seconds">
            <figcaption>2 sec</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Circle button</p>
        <div class="io-state">
          <img src="{{ bb | append: 'circlebutton_default.png' | relative_url }}" alt="Circle button off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'circlebutton_default_on.png' | relative_url }}" alt="Circle button on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The circle button color <strong>predicts</strong> the light bulb's next state.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Light bulb</p>
          <figure>
            <div class="io-path-step io-path-step--reset">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img8.png' | relative_url }}" alt="Gray circle button, returns the light bulb to default">
              </span>
              <svg class="io-path-arrow io-path-arrow--level" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M78 28 L18 28" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M18 28 L30 21 L30 35 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_default.png' | relative_url }}" alt="Light bulb off">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_default.png' | relative_url }}" alt="Default circle button, between the default and next light bulb">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img2.png' | relative_url }}" alt="Light bulb color 2">
            <figcaption>Color 2</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img2.png' | relative_url }}" alt="Circle button color 2, between light bulb colors 2 and 3">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img3.png' | relative_url }}" alt="Light bulb color 3">
            <figcaption>Color 3</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img3.png' | relative_url }}" alt="Circle button color 3, between light bulb colors 3 and 4">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img4.png' | relative_url }}" alt="Light bulb color 4">
            <figcaption>Color 4</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img4.png' | relative_url }}" alt="Circle button color 4, between light bulb colors 4 and 5">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img5.png' | relative_url }}" alt="Light bulb color 5">
            <figcaption>Color 5</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img5.png' | relative_url }}" alt="Circle button color 5, between light bulb colors 5 and 6">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img6.png' | relative_url }}" alt="Light bulb color 6">
            <figcaption>Color 6</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img6.png' | relative_url }}" alt="Circle button color 6, between light bulb colors 6 and 7">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img7.png' | relative_url }}" alt="Light bulb color 7">
            <figcaption>Color 7</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-path-mini">
                <img src="{{ bb | append: 'circlebutton_img7.png' | relative_url }}" alt="Circle button color 7, between light bulb colors 7 and 8">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'lightbulb_img8.png' | relative_url }}" alt="Light bulb color 8">
            <figcaption>Color 8</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Lever</p>
        <div class="io-state">
          <img src="{{ bb | append: 'input7_levertop.png' | relative_url }}" alt="Lever off, handle at the top">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'input7_leverbottom.png' | relative_url }}" alt="Lever on, handle at the bottom">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">No output connection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</details>

<details class="io-map-panel">
  <summary class="report-subheading io-map-heading" id="io-form-b-title">
    <span class="io-map-mark" aria-hidden="true"></span>
    <span class="io-map-heading-text">Form B: Input/Output connections</span>
    <span class="io-map-hint io-map-hint--show">(Click here to display)</span>
    <span class="io-map-hint io-map-hint--hide">(Click to hide)</span>
  </summary>
  <section class="io-map" aria-labelledby="io-form-b-title">
  <div class="io-map-scroll">
    <div class="io-board">
      <p class="io-inputs-legend">Input objects</p>
      <p class="io-outputs-legend">Outputs</p>
      <div class="io-rail" aria-hidden="true">
        <span class="io-rail-name"></span>
        <span class="io-rail-state">Off</span>
        <span class="io-rail-link"></span>
        <span class="io-rail-state">On<span class="io-rail-note">(Touched)</span></span>
        <span class="io-rail-arrow"></span>
        <span class="io-rail-outs">
          <span class="io-out-head"></span>
          <span class="io-out-title">&nbsp;</span>
          <span class="io-rail-state">Off</span>
          <span class="io-rail-state">State 1</span>
          <span class="io-rail-state">State 2</span>
          <span class="io-rail-state">State 3</span>
          <span class="io-rail-state">State 4</span>
          <span class="io-rail-state">State 5</span>
          <span class="io-rail-state">State 6</span>
          <span class="io-rail-state">State 7</span>
          <span class="io-rail-state">State 8</span>
          <span class="io-rail-state io-rail-ellipsis" aria-label="States 9 to 15"><span></span><span></span><span></span></span>
          <span class="io-rail-state">State 16</span>
        </span>
      </div>

      <div class="io-col">
        <p class="io-name">Dial</p>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_Input5_dial_0@2x.png' | relative_url }}" alt="Dial off, pointer at 0">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_Input5_dial_3@2x.png' | relative_url }}" alt="Dial on, pointer at 3">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The dial changes the lightbulb in a four-state <strong>fixed cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Light bulb</p>
          <figure>
            <img src="{{ bb | append: 'Images_lightbulb_default.png' | relative_url }}" alt="Light bulb off">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Images_lightbulb_yellow.png' | relative_url }}" alt="Light bulb on">
            <figcaption>Turns on</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Images_lightbulb_yellow.png' | relative_url }}" alt="Light bulb flashing slowly">
            <figcaption>Flashes slowly</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Images_lightbulb_yellow.png' | relative_url }}" alt="Light bulb flashing quickly">
            <figcaption>Flashes quickly</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Lever</p>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_input7_levertop.png' | relative_url }}" alt="Lever off, handle at the top">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_input7_leverbottom.png' | relative_url }}" alt="Lever on, handle at the bottom">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The barn door opens and reveals animals in a <strong>fixed cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Barn door</p>
          <figure>
            <img src="{{ bb | append: 'Output_barndoor_close.png' | relative_url }}" alt="Barn door closed">
            <figcaption>Closed</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal1.png' | relative_url }}" alt="Goat in the open barn">
            <figcaption>Open (Goat)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal2.png' | relative_url }}" alt="Chicken in the open barn">
            <figcaption>Open (Chicken)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal3.png' | relative_url }}" alt="Horse in the open barn">
            <figcaption>Open (Horse)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal4.png' | relative_url }}" alt="Cow in the open barn">
            <figcaption>Open (Cow)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal5.png' | relative_url }}" alt="Sheep in the open barn">
            <figcaption>Open (Sheep)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal6.png' | relative_url }}" alt="Duck in the open barn">
            <figcaption>Open (Duck)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal7.png' | relative_url }}" alt="Cat in the open barn">
            <figcaption>Open (Cat)</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_door_animal8.png' | relative_url }}" alt="Pig in the open barn">
            <figcaption>Open (Pig)</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Left toggle</p>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_left@2x.png' | relative_url }}" alt="Left toggle off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_right@2x.png' | relative_url }}" alt="Left toggle on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The red light turns on with <strong>33% probability</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Red light</p>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color1_off.png' | relative_url }}" alt="Red light off">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color1_on.png' | relative_url }}" alt="Red light on">
            <figcaption>Probability: 1/3</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Middle toggle</p>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_left@2x.png' | relative_url }}" alt="Middle toggle off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_right@2x.png' | relative_url }}" alt="Middle toggle on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The blue light turns on with <strong>66% probability</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Blue light</p>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color2_off.png' | relative_url }}" alt="Blue light off">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color2_on.png' | relative_url }}" alt="Blue light on">
            <figcaption>Probability: 2/3</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Right toggle</p>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_left@2x.png' | relative_url }}" alt="Right toggle off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img class="io-toggle" src="{{ bb | append: 'Images_Input2_toggle_right@2x.png' | relative_url }}" alt="Right toggle on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The green light <strong>always</strong> turns on.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Green light</p>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color3_off.png' | relative_url }}" alt="Green light off">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_alarmlight_color3_on.png' | relative_url }}" alt="Green light on">
            <figcaption>Probability: 1</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Slider</p>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_input4_sliderbottom.png' | relative_url }}" alt="Slider off, handle at the bottom">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'Images_input4_slidertop.png' | relative_url }}" alt="Slider on, handle at the top">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The weather changes in a <strong>semirandom cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Weather</p>
          <figure>
            <img src="{{ bb | append: 'Output_weater_rainbow.png' | relative_url }}" alt="Rainbow">
            <figcaption>Initial state</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_cloud.png' | relative_url }}" alt="Clouds">
            <figcaption>Clouds</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_rainbow.png' | relative_url }}" alt="Rainbow">
            <figcaption>Rainbow</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_sun.png' | relative_url }}" alt="Sun">
            <figcaption>Sun</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_rainbow.png' | relative_url }}" alt="Rainbow">
            <figcaption>Rainbow</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_cloud.png' | relative_url }}" alt="Clouds">
            <figcaption>Clouds</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_rain.png' | relative_url }}" alt="Rain umbrella">
            <figcaption>Umbrella</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_sun.png' | relative_url }}" alt="Sun">
            <figcaption>Sun</figcaption>
          </figure>
          <figure>
            <img src="{{ bb | append: 'Output_weater_cloud.png' | relative_url }}" alt="Clouds">
            <figcaption>Clouds</figcaption>
          </figure>
          <p class="io-out-more">The semi-random sequence continues.</p>
          <figure>
            <img src="{{ bb | append: 'Output_weater_rain.png' | relative_url }}" alt="Rain umbrella">
            <figcaption>Umbrella</figcaption>
          </figure>
        </div>
      </div>


      <div class="io-col">
        <p class="io-name">Switch</p>
        <div class="io-state">
          <img src="{{ bb | append: 'switch_off.png' | relative_url }}" alt="Switch off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'switch_on.png' | relative_url }}" alt="Switch on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">Two wheels spin for varying amounts of time in a <strong>semirandom cycle</strong>.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Wheels</p>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel, static">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel, static, lower and to the left">
            </span>
            <figcaption>Static</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 1 second">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 1 second">
            </span>
            <figcaption>1 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 4 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 4 seconds">
            </span>
            <figcaption>4 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 2 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 2 seconds">
            </span>
            <figcaption>2 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 3 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 3 seconds">
            </span>
            <figcaption>3 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 2 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 2 seconds">
            </span>
            <figcaption>2 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 1 second">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 1 second">
            </span>
            <figcaption>1 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 4 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 4 seconds">
            </span>
            <figcaption>4 sec</figcaption>
          </figure>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 3 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 3 seconds">
            </span>
            <figcaption>3 sec</figcaption>
          </figure>
          <p class="io-out-more">The semi-random sequence continues.</p>
          <figure class="io-wheels">
            <span class="io-wheels__pair">
              <img class="io-wheels__big" src="{{ bb | append: 'Images_Output5_wheel_big.png' | relative_url }}" alt="Large wheel spinning for 2 seconds">
              <img class="io-wheels__small" src="{{ bb | append: 'Images_Output5_wheel_small.png' | relative_url }}" alt="Small wheel spinning for 2 seconds">
            </span>
            <figcaption>2 sec</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Crank</p>
        <div class="io-state">
          <span class="io-crank">
            <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_1.png' | relative_url }}" alt="Crank off, handle pointing to the right">
          </span>
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <span class="io-crank io-crank--down">
            <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_1.png' | relative_url }}" alt="Crank on, handle pointing down">
          </span>
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">The crank color <strong>predicts</strong> the juice's next state.</p>
            <div class="io-out-stem" aria-hidden="true"></div>
          </div>
          <p class="io-out-title">Juice</p>
          <figure>
            <div class="io-path-step io-path-step--reset">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_9.png' | relative_url }}" alt="Gray crank, returns the glass to empty">
              </span>
              <svg class="io-path-arrow io-path-arrow--level" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M78 28 L18 28" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M18 28 L30 21 L30 35 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_empty.png' | relative_url }}" alt="Empty juice glass">
            <figcaption>Off</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_1.png' | relative_url }}" alt="Red crank, between the empty glass and the red juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color1.png' | relative_url }}" alt="Red juice">
            <figcaption>Red</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_2.png' | relative_url }}" alt="Green crank, between the red juice and the green juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color2.png' | relative_url }}" alt="Green juice">
            <figcaption>Green</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_3.png' | relative_url }}" alt="Brown crank, between the green juice and the brown juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color3.png' | relative_url }}" alt="Brown juice">
            <figcaption>Brown</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_4.png' | relative_url }}" alt="Orange crank, between the brown juice and the orange juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color4.png' | relative_url }}" alt="Orange juice">
            <figcaption>Orange</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_5.png' | relative_url }}" alt="Blue crank, between the orange juice and the blue juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color5.png' | relative_url }}" alt="Blue juice">
            <figcaption>Blue</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_6.png' | relative_url }}" alt="Yellow crank, between the blue juice and the yellow juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color6.png' | relative_url }}" alt="Yellow juice">
            <figcaption>Yellow</figcaption>
          </figure>
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_7.png' | relative_url }}" alt="Purple crank, between the yellow juice and the purple juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color7.png' | relative_url }}" alt="Purple juice">
            <figcaption>Purple</figcaption>
          </figure>
        </div>
      </div>

      <div class="io-col">
        <p class="io-name">Button</p>
        <div class="io-state">
          <img src="{{ bb | append: 'circle_button.png' | relative_url }}" alt="Button off">
        </div>
        <div class="io-state-link" aria-hidden="true"></div>
        <div class="io-state">
          <img src="{{ bb | append: 'circle_button_on.png' | relative_url }}" alt="Button on">
        </div>
        <div class="io-arrow"></div>
        <div class="io-outs">
          <div class="io-out-head">
            <p class="io-contingency">No output connection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</details>

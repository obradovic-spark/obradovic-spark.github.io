<div class="set-display set-display--matrix" role="group" aria-label="Busy board display forms">
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

<h3 class="report-subheading io-map-heading" id="io-form-b-title"><span class="io-map-mark" aria-hidden="true"></span>Form B: Input/Output connections</h3>

{% assign bb = '/assets/images/busy-board/screen_objects/' %}
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
            <figcaption>Probability: 2/6</figcaption>
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
          <figure>
            <div class="io-path-step">
              <span class="io-crank io-crank--mini">
                <img class="io-crank__handle" src="{{ bb | append: 'Images_Input6_crank_handle_8.png' | relative_url }}" alt="Teal crank, between the purple juice and the teal juice">
              </span>
              <svg class="io-path-arrow" viewBox="0 0 100 56" aria-hidden="true">
                <path d="M76 10 L26 36" fill="none" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/>
                <path d="M26 36 L34.8 35.5 L30.8 28.6 Z" fill="#4a4a4a"/>
              </svg>
            </div>
            <img src="{{ bb | append: 'Output_juice_color8.png' | relative_url }}" alt="Teal juice">
            <figcaption>Teal</figcaption>
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

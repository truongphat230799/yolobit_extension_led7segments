const LED7SEGColorBlock = "#33a5aa";
Blockly.Blocks['yolobit_led_7SEG_create'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "yolobit_led_7SEG_create",
          "message0": 'khởi tạo module led 7 đoạn chân CLK %1 chân DATA %2',
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CLK",
              "options": [
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ],
                [
                  "P19",
                  "pin19"
                ],
                [
                  "P20",
                  "pin20"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "DATA",
              "options": [
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ],
                [
                  "P19",
                  "pin19"
                ],
                [
                  "P20",
                  "pin20"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": LED7SEGColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['tm1637'];
    }
  };
  
  Blockly.Python['yolobit_led_7SEG_create'] = function(block) {
    var dropdown_clk = block.getFieldValue('CLK');
    var dropdown_data = block.getFieldValue('DATA');
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_tm1637'] = 'from tm1637 import *';
    var code = 'tm1637 = TM1637(dio=' + dropdown_data + '.pin, clk=' + dropdown_clk + '.pin)\n';
    return code;
  };


Blockly.Blocks["yolobit_led_7SEG_show_number"] = {
  init: function () {
    this.jsonInit({
      colour: LED7SEGColorBlock,
      nextStatement: null,
      previousStatement: null,
      tooltip: "Hiện số lên màn hình led 4 số",
      message0: "%3 led 4 số hiện số %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['yolobit_led_7SEG_show_number'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import *';
  var code = 'tm1637.number(' + value_text + ')\n';
  return code;
};

Blockly.Blocks["yolobit_led_7SEG_show_text"] = {
  init: function () {
    this.jsonInit({
      colour: LED7SEGColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "%3 led 4 số hiện chữ %1 %2",
      args0: [
        { type: "input_value", name: "value"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      tooltip: "Hiện chữ lên màn hình led 4 số",
      helpUrl: ""
    });
  },
};

Blockly.Python['yolobit_led_7SEG_show_text'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import *';
  var code = 'tm1637.show(' + value_text + ')\n';
  return code;
};

Blockly.Blocks["yolobit_led_7SEG_scroll"] = {
  init: function () {
    this.jsonInit({
      colour: LED7SEGColorBlock,
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 4 số cổng chạy chữ %1 tốc độ (ms) %2 %3",
      args0: [
        { type: "input_value", name: "value"},
        { type: "input_value", name: "speed", check: "Number"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      tooltip: "Chạy dòng chữ lên màn hình led 4 số",
      helpUrl: ""
    });
  },
};

Blockly.Python['yolobit_led_7SEG_scroll'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import *';
  var code = 'tm1637.scroll(' + value_text + ', ' + speed + ')\n';
  return code;
};

Blockly.Blocks["yolobit_led_7SEG_temperature"] = {
  init: function () {
    this.jsonInit({
      colour: LED7SEGColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "%3 led 4 số hiện nhiệt độ %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      tooltip: "Hiện nhiệt độ lên màn hình led 4 số",
      helpUrl: ""
    });
  },
};

Blockly.Python['yolobit_led_7SEG_temperature'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import *';
  var code = 'tm1637.temperature(' + value_text + ')\n';
  return code;
};

Blockly.Blocks["yolobit_led_7SEG_brightness"] = {
  init: function () {
    this.jsonInit({
      colour: LED7SEGColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "%3 led 4 số thay đổi độ sáng (0-7) %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      tooltip: "Thay đổi độ sáng của màn hình led 4 số",
      helpUrl: ""
    });
  },
};

Blockly.Python['yolobit_led_7SEG_brightness'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import *';
  var code = 'tm1637.brightness(' + value_text + ')\n';
  return code;
};
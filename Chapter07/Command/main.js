import SimpleRemoteControl from './SimpleRemoteControl';
import Light from './Light';
import LightOnCommand from './LightOnCommand';

const oSimpleRemote = new SimpleRemoteControl();
const oLight = new Light();
const oLightCommand = new LightOnCommand(oLight);

oSimpleRemote.setCommand(oLightCommand);
oSimpleRemote.buttonWasPressed();
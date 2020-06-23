import { Ch5Emulator } from "@crestron/ch5-crcomlib/build_bundles/umd/@types";

declare var CrComLib: typeof import("@crestron/ch5-crcomlib");

// This class iis used to initilaize the emulator using JSON files.
export class ConfigureEmulatorService {
  ch5Emulator: Ch5Emulator;

  constructor() {
    this.ch5Emulator = CrComLib.Ch5Emulator.getInstance();
  }

  // init emulator
  public initEmulator(emulator: any) {
    CrComLib.Ch5Emulator.clear();
    this.ch5Emulator = CrComLib.Ch5Emulator.getInstance();
    this.ch5Emulator.loadScenario(emulator);
    this.ch5Emulator.run();
  }
}

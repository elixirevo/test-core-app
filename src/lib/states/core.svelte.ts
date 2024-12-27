function createCoreState() {
  type CoreStateValue = 'NONE' | 'KEEP' | 'HANDOVER';

  let value: CoreStateValue = $state('NONE');

  return {
    get value() {
      return value;
    },
    set value(val: CoreStateValue) {
      value = val;
    },
  };
}

export const coreState = createCoreState();
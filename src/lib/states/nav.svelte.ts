function createNavMenu() {
  let value: boolean = $state(false);

  const switchNavMenu = () => {
    value = !value;
  }

  return {
    get value() {
      return value;
    },
    set value(val: boolean) {
      value = val;
    },
    switchNavMenu,
  };
}

export const navMenuState = createNavMenu();
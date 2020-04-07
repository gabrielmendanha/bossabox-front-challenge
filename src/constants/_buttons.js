import {
  Red,
  DarkRed,
  DarkerRed,
  LightRed,
  FilteredRed,
  Blue,
  DarkBlue,
  DarkerBlue,
  LightBlue,
  LighterBlue,
  FilteredBlue
} from "./_colors";

export const PrimaryDangerTheme = {
  background: Red,
  hover: DarkRed,
  active: DarkerRed,
  disabled: LightRed
};

export const PrimaryTheme = {
  background: Blue,
  hover: DarkBlue,
  active: DarkerBlue,
  disabled: LighterBlue
};

export const SecondaryTheme = {
  filter: FilteredBlue,
  color: Blue,
  disabled: LightBlue
};

export const SecondaryDangerTheme = {
  filter: FilteredRed,
  color: Red,
  disabled: LightRed
};

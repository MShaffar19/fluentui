import { ComponentProps, ObjectShorthandProps, ShorthandProps } from '@fluentui/react-utils';
import * as React from 'react';

import { BadgeProps } from '../Badge/index';
import { ImageProps } from '../Image/index';

export interface AvatarProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /**
   * The root element type of the Avatar.
   *
   * @defaultvalue span
   */
  as?: React.ElementType;

  /** The Avatar's image. */
  image?: ShorthandProps<ImageProps>;

  /**
   * The label shown when there's no image or icon. Defaults to the initials derived from `name` using
   * `getInitials`.
   */
  label?: ShorthandProps<React.HTMLAttributes<HTMLSpanElement>>;

  /** Icon displayed when there's no image. */
  icon?: ShorthandProps<React.HTMLAttributes<HTMLSpanElement>>;

  /** Badge to show the avatar's status. */
  badge?: ShorthandProps<BadgeProps>;

  /** The name used for displaying the initials of the avatar if the image is not provided. */
  name?: string;

  /** Custom method for generating the initials from the name property, which is shown if no image is provided. */
  getInitials?: (name: string, isRtl: boolean) => string;

  /**
   * Size of the avatar in pixels.
   *
   * Size is restricted to a limited set of supported values recommended for most uses (see `AvatarSizeValue`).
   *
   * If a non-supported size is neeeded, set `size` to the next-smaller supported size, and use the `width` and `height`
   * tokens to override the rendered size, plus other size-related tokens if needed, such as `fontSize` and `iconSize`.
   *
   * For example, to set the avatar to 45px in size:
   * `<Avatar size={40} tokens={{ width: '45px', height: '45px' }} />`
   *
   * @defaultvalue 32
   */
  size?: AvatarSizeValue;

  /** The avatar can have a square shape. */
  square?: boolean;

  /**
   * Optional activity indicator
   * * active: the avatar will be decorated according to activeDisplay
   * * inactive: the avatar will be reduced in size and partially transparent
   * * unset: normal display
   *
   * @defaultvalue unset
   */
  active?: 'active' | 'inactive' | 'unset';

  /**
   * The type of visual treatment to use when `active="active"`
   *
   * @defaultvalue ring
   */
  activeDisplay?: 'ring' | 'shadow' | 'glow' | 'ring-shadow' | 'ring-glow';

  /**
   * The color when displaying either an icon or initials.
   * * neutral (default): gray
   * * brand: color from the brand palette
   *
   * @defaultvalue neutral
   */
  colorVariant?: 'neutral' | 'brand';
}

/**
 * Sizes for the Avatar
 *
 * This is a restricted list based on design guidelines for the Avatar control.
 * It's recommended to use one of these sizes to conform to the design guidelines,
 * but it is possible to render a different size using tokens.
 */
export const avatarSizeValues = [20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] as const;
export type AvatarSizeValue = typeof avatarSizeValues[number]; // 20 | 24 | 28 | ... | 128
// !! Important: when adding new AvatarSizeValues, add corresponding "._size" classes in Avatar.scss

/** Default Avatar size if not specified */
export const defaultAvatarSize: AvatarSizeValue = 32;

export type AvatarState = Omit<AvatarProps, 'label' | 'icon' | 'image' | 'badge' | 'getInitials'> & {
  activeRing: boolean;
  activeShadow: boolean;
  activeGlow: boolean;

  hasIcon: boolean;

  label: ObjectShorthandProps<React.HTMLAttributes<HTMLSpanElement>>;
  icon: ObjectShorthandProps<React.HTMLAttributes<HTMLSpanElement>>;
  image: ObjectShorthandProps<React.HTMLAttributes<ImageProps>>;
  badge: ObjectShorthandProps<React.HTMLAttributes<BadgeProps>>;

  getInitials: NonNullable<AvatarProps['getInitials']>;

  ref: React.MutableRefObject<HTMLElement>;
};

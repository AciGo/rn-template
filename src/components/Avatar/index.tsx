/*
 * @文件描述: 头像组件
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-01-15 10:17:42
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-05-08 17:38:58
 */
import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { Size, Color } from '../../config';

interface AvatarProps {
  uri?: string;
  width?: number;
  style?: ImageStyle;
}
const Avatar: React.FC<AvatarProps> = ({ uri, width = 28, style }) => (
  <Image
    source={
      uri
        ? {
            uri
          }
        : require('../../assets/pic_avatar_default.png')
    }
    style={[
      {
        width,
        height: width,
        borderRadius: width / 2,
        borderWidth: Size.ONE_PIXEL,
        borderColor: Color.borderColor
      },
      style
    ]}
    resizeMode="contain"
  />
);
export default Avatar;

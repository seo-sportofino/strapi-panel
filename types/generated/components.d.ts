import type { Schema, Attribute } from '@strapi/strapi';

export interface BaseDynamicContent extends Schema.Component {
  collectionName: 'components_base_dynamic_contents';
  info: {
    displayName: 'Dynamic content';
  };
  attributes: {};
}

export interface ConfigCustom extends Schema.Component {
  collectionName: 'components_config_customs';
  info: {
    displayName: 'custom';
  };
  attributes: {
    custom_code: Attribute.Text;
    custom_style: Attribute.Text;
  };
}

export interface ConfigOpenGraph extends Schema.Component {
  collectionName: 'components_config_open_graphs';
  info: {
    displayName: 'open graph';
  };
  attributes: {
    og_title: Attribute.String;
    og_image: Attribute.Media;
  };
}

export interface ConfigSeo extends Schema.Component {
  collectionName: 'components_config_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    canonical: Attribute.String;
    sitemap: Attribute.Boolean & Attribute.DefaultTo<true>;
    meta_robots: Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'index, follow'>;
  };
}

export interface ConfigTwitterCard extends Schema.Component {
  collectionName: 'components_config_twitter_cards';
  info: {
    displayName: 'twitter card';
  };
  attributes: {
    twitter_image: Attribute.Media;
    twitter_title: Attribute.String;
  };
}

export interface RepeatableSocialMedia extends Schema.Component {
  collectionName: 'components_repeatable_social_medias';
  info: {
    displayName: 'Social Media';
    description: '';
  };
  attributes: {
    medium: Attribute.Enumeration<
      ['Facebook', 'Instagram', 'Website', 'Twitter', 'Linkedin']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.dynamic-content': BaseDynamicContent;
      'config.custom': ConfigCustom;
      'config.open-graph': ConfigOpenGraph;
      'config.seo': ConfigSeo;
      'config.twitter-card': ConfigTwitterCard;
      'repeatable.social-media': RepeatableSocialMedia;
    }
  }
}

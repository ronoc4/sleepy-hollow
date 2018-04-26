export interface UserResponse {
  nid: string;
  uuid: string;
  vid: string;
  langcode: string;
  type: string;
  revision_timestamp: string;
  revision_uid: string;
  revision_log: string;
  status: string
  title: string
  uid: string;
  created: string;
  changed: string;
  promote: string;
  sticky: string;
  default_langcode: string;
  revision_translation_affected: string;
  path: string;
  body:  string;
  field_image:  string;
  field_title: string;
}

export interface FieldImage {
  alt: string;
  url: string;
}

export interface Title {
  value: string;
}

export interface Body {
  processed: string;
}

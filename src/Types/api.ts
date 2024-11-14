import { ExperiencesType, qualificationType } from ".";

export interface LoginTypeInput {
  username: string;
  phone_code?: string;
  message_type?: "sms";
  type: "consultant" | "customer";
}
export interface LoginTypeOutput {
  data: {
    data: IGetProfile;
    token: string;
  };
}
export interface CountriesData {
  id: number;
  name: string;
  code: string;
  key: string;
  is_default: boolean;
  currency: string;
  flag: string;
}
export interface IGetCountries {
  data: CountriesData[];

  links: {
    first: string;
    last: string;
    prev: null | string;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: null | string;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}
export interface VerifyCodeInput {
  code: string;
}
export interface VerifyCodeOutput {
  data: {
    data: {
      id: number;
      name: string;
      email: string;
      phone: string;
      phone_code: string;
      birthdate: null | string;
      bio: null | string;
      gender: null | string;
      type: string; //customer or consultant
      avatar: string;
      localed_type: string;
      country: null | string;
      city: null | string;
      rating: {
        avg: number;
        count: number;
        professionalism: null | string;
      };
      counts: {
        cancelled_projects: number;
        waiting_projects: number;
        completed_projects: number;
      };
      unread_notifications_count: number;
      completed_profile: boolean;
      enable_2fa: boolean;
      created_at: string;
      created_at_formatted: string;
    };
  };
}
export interface updateProfileInpust {
  name?: string;
  email?: string;
  phone?: string;
  code?: string;
  avatar?: string;
  bio?: string;
  gender?: string;
  phone_code?: string;
  birthdate?: string; //format: YYYY-MM-DD
  country_id?: string | number;
  city_id?: string;
  certificates?: qualificationType[];
  experiences?: ExperiencesType[];
  categories?: number[];
  specialities?: number[];
}
export interface SpecialitiesType {
  id: number;
  text: string;
  in_home: boolean;
  color: string;
  media: {
    id: number;
    url: string;
    preview: string;
    name: string;
    file_name: string;
    type: string;
    mime_type: string;
    size: number;
    human_readable_size: string;
    details: {
      width: number;
      height: number;
      ratio: number;
    };
    status: string;
    progress: number;
    links: {
      delete: {
        href: string;
        method: string;
      };
    };
  };
}
export interface IGetSpecialities {
  data: SpecialitiesType[];
}
export interface IGetCategories {
  data: {
    id: number;
    text: string;
  }[];
}
export interface IGetBaserProfile {
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    phone_code: string;
    birthdate: string;
    bio: string;
    gender: string;
    type: string;
    avatar: string;
    localed_type: string;
    country: {
      id: number;
      name: string;
      code: string;
      key: string;
      is_default: true;
      currency: string;
      flag: string;
    };
    city: {
      id: number;
      name: string;
    };

    rating: {
      avg: number;
      count: number;
      professionalism: null | number;
    };
    counts: {
      cancelled_projects: number;
      waiting_projects: number;
      completed_projects: number;
    };
    unread_notifications_count: number;
    enable_2fa: boolean;
    completed_profile: boolean;
    created_at: string;
    created_at_formatted: string;
  };
}
export interface schedulesType {
  date: string; // Format: year::mounth:minute
  day_name: string;
  from_time: string; // Format: H:i
  to_time: string; // Format : H:i
  repeat: boolean;
  color?: number;
}
export interface IGetProfile {
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    phone_code: string;
    birthdate: string;
    bio: string;
    gender: string;
    type: string;
    avatar: string;
    localed_type: string;
    facebook?: string | null;
    favoriters_count?: number;
    followers_count?: number;
    is_favorited?: boolean;
    is_followed?: boolean;
    is_online?: boolean;
    linkedin?: string | null;
    preferred_profile?: string;
    twitter?: string | null;
    online_until?: boolean;
    country: {
      id: number;
      name: string;
      code: string;
      key: string;
      is_default: boolean;
      currency: string;
      flag: string;
    };
    city: {
      id: number;
      name: string;
    };
    rating?: {
      avg: number;
      count: number;
      professionalism: number | string | null;
      communication: number;
      experience: number;
      quality: number;
    };
    counts?: {
      invitations_count: number;
      waiting_projects: number;
      completed_projects: number;
    };
    settings?: {
      accept_requests: null;
      meeting_options: null;
      poster_avatar: null;
      poster_theme: null;
      schedules: schedulesType[];
      weekly_schedule: null;
    };
    projects: {
      completed: number;
      extension_percentage: number;
      waiting: number;
    };
    statistics?: {
      completed_projects_count: number;
      invitations_count: number;
      projects_count: number;
      waitings_count: number;
    };
    category?: {
      id: number;
      text: string;
    }[];
    specialities?: {
      id: number;
      text: string;
    }[];
    experiences?: {
      year: string;
      job_title: string;
      issuer: string;
    }[];
    cetificates?: {
      year: string;
      issuer: string;
      cartificate: string;
    }[];
    unread_notifications_count: number;
    completed_profile: boolean;
    enable_2fa: boolean;
    created_at: string;
    created_at_formatted: string;
  };
}
export interface AuthUser {
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    phone_code: string;
    birthdate: string;
    bio: string;
    gender: string;
    type: string;
    avatar: string;
    localed_type: string;
    facebook?: string | null;
    favoriters_count?: number;
    followers_count?: number;
    is_favorited?: boolean;
    is_followed?: boolean;
    is_online?: boolean;
    linkedin?: string | null;
    preferred_profile?: string;
    twitter?: string | null;
    online_until?: boolean;
    country: {
      id: number;
      name: string;
      code: string;
      key: string;
      is_default: boolean;
      currency: string;
      flag: string;
    };
    city: {
      id: number;
      name: string;
    };
    rating?: {
      avg: number;
      count: number;
      professionalism: number | string | null;
      communication: number;
      experience: number;
      quality: number;
    };
    counts?: {
      invitations_count: number;
      waiting_projects: number;
      completed_projects: number;
    };
    settings?: {
      accept_requests: null;
      meeting_options: null;
      poster_avatar: null;
      poster_theme: null;
      schedules: schedulesType[];
      weekly_schedule: null;
    };
    projects: {
      completed: number;
      extension_percentage: number;
      waiting: number;
    };
    statistics?: {
      completed_projects_count: number;
      invitations_count: number;
      projects_count: number;
      waitings_count: number;
    };
    category?: {
      id: number;
      text: string;
    }[];
    specialities?: {
      id: number;
      text: string;
    }[];
    experiences?: {
      year: string;
      job_title: string;
      issuer: string;
    }[];
    cetificates?: {
      year: string;
      issuer: string;
      cartificate: string;
    }[];
    unread_notifications_count: number;
    completed_profile: boolean;
    enable_2fa: boolean;
    created_at: string;
    created_at_formatted: string;
  };
}
export interface updateProfileOutPut {
  data: IGetProfile;
}

export interface updateProfileSettingsInpust {
  poster_avatar?: File;
  poster_theme?: string;
  weekly_schedule?: string;
  // meeting_options?: string;
  accept_requests?: string;
  schedules: schedulesType[];
}
export interface IGetNotificationSettings {
  data: {
    key: string;
    name: string;
    mail: boolean;
    database: boolean;
    webpush: boolean;
    firebase: boolean;
  }[];
}
export interface NotifySettObject {
  database?: boolean;
  mail?: boolean;
  webpush?: boolean;
  firebase?: boolean;
}
export interface UpdateNotificationSettingsInpust {
  notify: {
    extension_request_created?: NotifySettObject;
    project_cancelled?: NotifySettObject;
    project_reminder?: NotifySettObject;
    schedule_remider?: NotifySettObject;
    withdrawal_accepted?: NotifySettObject;
    withdrawal_cancelled?: NotifySettObject;
    consultant_request_created?: NotifySettObject;
  };
}
export interface UpdateNotificationSettingsOutput {
  message: string;
}
export interface UploadMediaInpust {
  file: File;
  collection: string;
}
export interface UploadMediaOutput {
  data: {
    data: [
      {
        id: number;
        url: string;
        preview: string;
        name: string;
        file_name: string;
        type: string;
        mime_type: string;
        size: number;
        human_readable_size: string;
        details: {
          width: number;
          height: number;
          ratio: number;
        };
        status: string;
        progress: number;
        conversions: {
          large: string;
          small: string;
          thumb: string;
          medium: string;
        };
        links: {
          delete: {
            href: string;
            method: string;
          };
        };
      }
    ];
    token: string;
  };
}
export interface IGetNotifications {
  data: {
    id: string;
    title: string;
    body: string;
    is_read: true;
    tab: string;
    read_at: string;
    read_at_formated: string;
    created_at: string;
    created_at_formated: string;
    view: string;
    user: {
      avatar: string;
      id: number;
      name: string;
    };
  }[];
}
export interface cetificates {
  id: string;
  year: string;
  issuer: string;
  cartificate: string;
}
export interface experiences {
  id: string;
  year: string;
  issuer: string;
  job_title: string;
}
export interface categorySelect {
  id: number;
  text: string;
}
export interface specialitiesSelect {
  id: number;
  text: string;
  in_home: boolean;
  color: string;
  media: {
    id: number;
    url: string;
    preview: string;
    name: string;
    file_name: string;
    type: string;
    mime_type: string;
    size: number;
    human_readable_size: string;
    details: {
      width: number;
      height: number;
      ratio: number;
    };
    status: string;
    progress: number;
    links: {
      delete: {
        href: string;
        method: string;
      };
    };
  };
}
export interface schedulesType {
  id: string;
  from_time: string;
  to_time: string;
  date: string;
  day_name: string;
  repeat: boolean;
}
export interface IGetBostany {
  id: number;
  name: string;
  email: string;
  phone: string;
  phone_code: string;
  type: string;
  gender: string;
  avatar: string;
  birthdate: string;
  bio: string;
  cetificates: cetificates[];
  experiences: experiences[];
  category: categorySelect[];
  specialities: specialitiesSelect[];
  country: {
    id: number;
    name: string;
    code: string;
    key: string;
    is_default: boolean;
    currency: string;
    flag: string;
  } | null;
  city: {
    id: number;
    name: string;
  } | null;
  rating: {
    avg: number;
    count: number;
    professionalism: number;
    communication: number;
    quality: number;
    experience: number;
  };
  settings: {
    poster_avatar: string;
    poster_theme: string;
    weekly_schedule: boolean;
    meeting_options: [];
    accept_requests: boolean;
    schedules: schedulesType[];
  };
  statistics: {
    waitings_count: number;
    projects_count: number;
    invitations_count: number;
    completed_projects_count: number;
  };
  followers_count: number;
  is_followed: boolean;
  favorites_count: number;
  is_favorited: boolean;
  unread_notifications_count: number;
  completed_profile: boolean;
  facebook: string;
  twitter: string;
  linkedin: string;
  preferred_profile: string;
  localed_type: string;
  online_until: boolean;
  online_until_minutes: number;
  projects: {
    completed: number;
    waiting: number;
    extension_percentage: number;
  };
  counts: {
    invitations_count: number;
    waiting_projects: number;
    completed_projects: number;
  };
  enable_2fa: boolean;
  created_at: string;
  created_at_formatted: string;
}
export interface IGetConsultants {
  data: IGetBostany[];
}
export interface IGetFollowingList {
  data: IGetBostany[];
}
export interface ToggleFavoriteOutput {
  status: boolean;
  message: string;
}

export interface IGetProject {
  accepted_request: {
    consultant: IGetBostany;
    created_at: string;
    created_at_formatted: string;
    extension_request_id: string;
    extension_requested: false;
    id: number;
    rating: null;
    remaining_formatted: string;
    remaining_hours: number;
    start_at: string;
  };
  authorize: {
    change_time: boolean;
    reject: boolean;
    report: boolean;
    start_meeting: boolean;
  };
  id: number;
  name: string;
  description: string;
  invitation: {
    end_at: string;
    start_at: string;
  };
  is_closed: boolean;
  is_favorited: boolean;
  labels: string[];
  participants_count: number;
  specialities: {
    id: number;
    text: string;
  }[];
  status: string;
  status_localed: string;
  stage: string;
  stage_localed: string;
  user: {
    id: number;
    name: string;
    type: string;
    avatar: string;
    rating: {
      avg: string;
      count: number;
    };
    localed_type: string;
    created_at: string;
    created_at_formatted: string;
  };
  created_at: string;
  created_at_formatted: string;
}
export interface IGetProjects {
  data: IGetProject[];
}
export interface IPostProjectOutPut {
  data: IGetProject;
}
export interface CreateProjectInput {
  name: string;
  description?: string;
  attachments: string[];
  consultants: number[];
  start_at: string; // Format: H:i
  specialities: number[]; // Array of IDs
}
export interface CreateAttachmentInput {
  ProjectId: number;
  file: File;
}
export interface CreateAttachmentOutPut {
  data: {
    id: number;
    url: string;
    preview: string;
    name: string;
    file_name: string;
    type: string;
    mime_type: string;
    size: number;
    human_readable_size: string;
    details: {
      width: null | string;
      height: null | string;
    };
    ratio: number;
  };
  status: null | string;
  links: {
    delete: {
      href: string;
      method: string;
    };
  };
}
export interface IGetStatistics {
  completed_projects_count: number;
  average_meeting_duration: number;
  cancellation_rate: number;
  invitations_count: number;
  average_income: number;
  average_rating: number;
}
export interface RejectProjectType {
  message: string;
}
// export interface AcceptProjectType {}

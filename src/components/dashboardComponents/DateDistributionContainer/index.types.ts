export interface Activity {
  name: string;
  value: number;
  date: string;
}

export interface DayActivity {
  date: string;
}

export interface ActivityMeta {
  label: string;
  fillColor: string;
  percent: string;
  value: number;
}

export interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

export interface TotalActivity {
  name: string;
  value: string;
}

export interface Row {
  name: string;
  totalActivity: TotalActivity[];
  dayWiseActivity: DayWiseActivity[];
}

export interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: Row[];
}

export interface DashboardData {
  AuthorWorklog: AuthorWorklog;
}

export interface DataProps {
  AuthorWorklog: {
    rows: Row[];
  };
}

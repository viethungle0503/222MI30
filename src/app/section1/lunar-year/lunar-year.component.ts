import { Component } from '@angular/core';

@Component({
  selector: 'app-lunar-year',
  templateUrl: './lunar-year.component.html',
  styleUrls: ['./lunar-year.component.css'],
})
export class LunarYearComponent {
  public selectedDate: number = new Date().getDate();
  public selectedMonth: number = new Date().getMonth() + 1;
  public selectedYear: number = new Date().getFullYear();
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years = [
    1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911,
    1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923,
    1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
    1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
    1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
    1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
    1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031,
    2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043,
    2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055,
    2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067,
    2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079,
    2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091,
    2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099,
  ];
  getDates() {
    let oddMonth = [1, 3, 5, 7, 8, 10, 12];
    let normalMonth = [4, 6, 9, 11];
    let datesOfOddMonths = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    let datesOfNormalMonths = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    let februaryInNormalYear = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];
    let februaryInLeapYear = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29,
    ];
    let month = this.selectedMonth;
    if (oddMonth.findIndex((x) => x == month) != -1) {
      return datesOfOddMonths;
    } else if (normalMonth.findIndex((x) => x == month) != -1) {
      return datesOfNormalMonths;
    } else if (
      this.selectedYear % 400 == 0 ||
      (this.selectedYear % 4 == 0 && this.selectedYear % 100 != 0)
    ) {
      return februaryInLeapYear;
    }
    return februaryInNormalYear;
  }
  public dayInWeek: string = `Ngày thứ ${new Date().getDay()}`;
  public hourString: string = '';
  public dateString: string = '';
  public dayString:string = '';
  public monthString: string = '';
  public yearString: string = '';
  public lunarYear = new LunarYear(this.selectedDate.toString(),this.selectedMonth.toString(),this.selectedYear.toString());
  convert() {
    this.lunarYear = new LunarYear(this.selectedDate.toString(),this.selectedMonth.toString(),this.selectedYear.toString());
    let temp = this.lunarYear.Solar2Lunar(
      this.selectedDate,
      this.selectedMonth,
      this.selectedYear
    );
    this.dayString = this.lunarYear.CanChiNgay().toString();
    this.monthString = this.lunarYear.CanChiThang(temp[1], temp[2]);
    this.yearString = this.lunarYear.CanChiNam(temp[2]);
    this.dateString = `${temp[0]}/${temp[1]}/${temp[2]}`;
    this.hourString = this.lunarYear.CanChiGio().toString();
  }
}
class LunarYear {
  public date?: string;
  public month?: string;
  public year?: string;
  public lunarYearDay?: string;
  constructor();
  constructor(x: string, y: string, z: string);
  constructor(x?: string, y?: string, z?: string, t?: string) {
    this.date = x;
    this.month = y;
    this.year = z;
    this.lunarYearDay = t;
  }
  // Thiên can
  private Can = [
    'Giáp',
    'Ất',
    'Bính',
    'Đinh',
    'Mậu',
    'Kỷ',
    'Canh',
    'Tân',
    'Nhâm',
    'Quý',
  ];
  // Địa chi
  private Chi = [
    'Tý',
    'Sửu',
    'Dần',
    'Mão',
    'Thìn',
    'Tỵ',
    'Ngọ',
    'Mùi',
    'Thân',
    'Dậu',
    'Tuất',
    'Hợi',
  ];
  public CanChiNam(year: number) {
    return `${this.Can[(year + 6) % 10]} ${this.Chi[(year + 8) % 12]}`;
  }
  public CanChiThang(month: number, year: number) {
    return `${this.Can[(year * 12 + month + 3) % 10]} ${
      this.Chi[(month + 1) % 12]
    }`;
  }
  public CanChiNgay(
    day: number = Number(this.SolarToJD(Number(this.date),Number(this.month),Number(this.year))),
    // day: number = Number(this.date),
    month: number = Number(this.month) - 1,
    year: number = Number(this.year)
  ) {
    // let days: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // if (month > 2 && year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    //   ++(day);
    // }
    // while ((month-1) > -1) {
    //   day = (day) + Number(days[month - 1]);
    //   month--;
    // }
    return `${this.Can[(Number(day.toFixed(0))-1) % 10]} ${this.Chi[(Number(day.toFixed(0))+1) % 12]}`;
  }
  public CanChiGio() {
    let hour = new Date().getHours()
    let index:number = Number(((hour / 2) % 12).toFixed(0));
    return `Giờ ${this.Chi[index]}`;
  }
  public INT(doubleVariable: number) {
    return Math.floor(doubleVariable);
  }
  public MOD(x: number, y: number) {
    let z: number = x - Number(y * Math.floor(x / y));
    if (z == 0) {
      z = y;
    }
    return z;
  }
  //Đổi ngày dương lịch ra số ngày Julius
  public SolarToJD(D: number, M: number, Y: number) {
    let JD: number = 0;
    if (Y > 1582 || (Y == 1582 && M > 10) || (Y == 1582 && M == 10 && D > 14)) {
      JD =
        367 * Y -
        this.INT((7 * (Y + this.INT((M + 9) / 12))) / 4) -
        this.INT((3 * (this.INT((Y + (M - 9) / 7) / 100) + 1)) / 4) +
        this.INT((275 * M) / 9) +
        D +
        1721028.5;
    } else {
      JD =
        367 * Y -
        this.INT((7 * (Y + 5001 + this.INT((M - 9) / 7))) / 4) +
        this.INT((275 * M) / 9) +
        D +
        1729776.5;
    }
    return JD;
  }
  //Đổi số ngày Julius ra ngày dương lịch
  public SolarFromJD(JD: number) {
    let Z, A, alpha, B, C, D, E, dd, mm, yyyy, F: number;
    Z = this.INT(JD + 0.5);
    F = JD + 0.5 - Z;
    if (Z < 2299161) {
      A = Z;
    } else {
      alpha = this.INT((Z - 1867216.25) / 36524.25);
      A = Z + 1 + alpha - this.INT(alpha / 4);
    }
    B = A + 1524;
    C = this.INT((B - 122.1) / 365.25);
    D = this.INT(365.25 * C);
    E = this.INT((B - D) / 30.6001);
    dd = this.INT(B - D - this.INT(30.6001 * E) + F);
    if (E < 14) {
      mm = E - 1;
    } else {
      mm = E - 13;
    }
    if (mm < 3) {
      yyyy = C - 4715;
    } else {
      yyyy = C - 4716;
    }
    let returnArray: Array<number> = [dd, mm, yyyy];
    return returnArray;
  }
  //Chuyển đổi số ngày Julius / ngày dương lịch theo giờ địa phương LOCAL_TIMEZONE, Việt Nam: LOCAL_TIMEZONE = 7.0
  public LocalFromJD(JD: number) {
    return this.SolarFromJD(JD + 7.0 / 24.0);
  }

  public LocalToJD(D: number, M: number, Y: number) {
    return this.SolarToJD(D, M, Y) - 7.0 / 24.0;
  }
  //Tính thời điểm Sóc
  public NewMoon(k: number) {
    let T: number = k / 1236.85;
    let T2: number = T * T;
    let T3: number = T2 * T;
    let dr: number = Math.PI / 180;
    let Jd1: number =
      2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    let M: number =
      359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    let Mpr: number =
      306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    let F: number =
      21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    let C1: number =
      (0.1734 - 0.000393 * T) * Math.sin(M * dr) +
      0.0021 * Math.sin(2 * dr * M);
    C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 =
      C1 -
      0.0074 * Math.sin(dr * (M - Mpr)) +
      0.0004 * Math.sin(dr * (2 * F + M));
    C1 =
      C1 -
      0.0004 * Math.sin(dr * (2 * F - M)) -
      0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 =
      C1 +
      0.001 * Math.sin(dr * (2 * F - Mpr)) +
      0.0005 * Math.sin(dr * (2 * Mpr + M));
    let deltat: number = 0;
    if (T < -11) {
      deltat =
        0.001 +
        0.000839 * T +
        0.0002261 * T2 -
        0.00000845 * T3 -
        0.000000081 * T * T3;
    } else {
      deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
    }
    let JdNew: number = Jd1 + C1 - deltat;
    return JdNew;
  }
  //Tính vị trí của mặt trời
  public SunLongitude(jdn: number) {
    let T: number = (jdn - 2451545.0) / 36525;
    let T2: number = T * T;
    let dr: number = Math.PI / 180;
    let M: number =
      357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    let L0: number = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    let DL: number = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL =
      DL +
      (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) +
      0.00029 * Math.sin(dr * 3 * M);
    let L: number = L0 + DL;
    L = L * dr;
    L = L - Math.PI * 2 * this.INT(L / (Math.PI * 2));
    return L;
  }
  //Tính tháng âm lịch chứa ngày Đông chí
  public LunarMonth11(Y: number) {
    let off: number = this.LocalToJD(31, 12, Y) - 2415021.076998695;
    let k: number = this.INT(off / 29.530588853);
    let jd: number = this.NewMoon(k);
    let ret: Array<number> = this.LocalFromJD(jd);
    let sunLong: number = this.SunLongitude(
      this.LocalToJD(ret[0], ret[1], ret[2])
    );
    if (sunLong > (3 * Math.PI) / 2) {
      jd = this.NewMoon(k - 1);
    }
    return this.LocalFromJD(jd);
  }
  //Tính tháng nhuận
  public initLeapYear(ret: number[][]) {
    let sunLongitudes = new Array<number>(ret.length);
    for (let i: number = 0; i < ret.length; i++) {
      let a: number[] = ret[i];
      let jdAtMonthBegin: number = this.LocalToJD(a[0], a[1], a[2]);
      sunLongitudes[i] = this.SunLongitude(jdAtMonthBegin);
    }
    let found: boolean = false;
    for (let i: number = 0; i < ret.length; i++) {
      if (found) {
        ret[i][3] = this.MOD(i + 10, 12);
        continue;
      }
      let sl1: number = sunLongitudes[i];
      let sl2: number = sunLongitudes[i + 1];
      let hasMajorTerm: boolean =
        Math.floor((sl1 / Math.PI) * 6) != Math.floor((sl2 / Math.PI) * 6);
      if (!hasMajorTerm) {
        found = true;
        ret[i][4] = 1;
        ret[i][3] = this.MOD(i + 10, 12);
      }
    }
  }
  //Tính năm âm lịch
  public LunarYear(Y: number): number[][] {
    let ret: number[][];
    let month11A: Array<number> = this.LunarMonth11(Y - 1);
    let jdMonth11A: number = this.LocalToJD(
      month11A[0],
      month11A[1],
      month11A[2]
    );
    let k: number = Math.floor(
      0.5 + (jdMonth11A - 2415021.076998695) / 29.530588853
    );
    let month11B: Array<number> = this.LunarMonth11(Y);
    let off: number =
      this.LocalToJD(month11B[0], month11B[1], month11B[2]) - jdMonth11A;
    let leap: boolean = off > 365.0;
    if (!leap) {
      ret = new Array<number[]>(13);
    } else {
      ret = new Array<number[]>(14);
    }
    ret[0] = new Array<number>(month11A[0], month11A[1], month11A[2], 0, 0);
    ret[ret.length - 1] = new Array<number>(
      month11B[0],
      month11B[1],
      month11B[2],
      0,
      0
    );
    for (let i: number = 1; i < ret.length - 1; i++) {
      let nm: number = this.NewMoon(k + i);
      let a: number[] = this.LocalFromJD(nm);
      ret[i] = new Array<number>(a[0], a[1], a[2], 0, 0);
    }
    for (let i: number = 0; i < ret.length; i++) {
      ret[i][3] = this.MOD(i + 11, 12);
    }
    if (leap) {
      this.initLeapYear(ret);
    }
    return ret;
  }
  //Đổi ngày dương lịch ra âm lịch
  public Solar2Lunar(D: number, M: number, Y: number): number[] {
    let yy: number = Y;
    let ly: number[][] = this.LunarYear(Y);
    let month11: number[] = ly[ly.length - 1];
    let jdToday: number = this.LocalToJD(D, M, Y);
    let jdMonth11: number = this.LocalToJD(month11[0], month11[1], month11[2]);
    if (jdToday >= jdMonth11) {
      ly = this.LunarYear(Y + 1);
      yy = Y + 1;
    }
    let i: number = ly.length - 1;
    while (jdToday < this.LocalToJD(ly[i][0], ly[i][1], ly[i][2])) {
      i--;
    }
    let dd: number =
      Number(jdToday - this.LocalToJD(ly[i][0], ly[i][1], ly[i][2])) + 1;
    let mm: number = ly[i][3];
    if (mm >= 11) {
      yy--;
    }
    let returnResults = new Array<number>(dd, mm, yy, ly[i][4]);
    return returnResults;
    //Nếu ly[i][4] == 1 => tháng mm Nhuận
  }
}

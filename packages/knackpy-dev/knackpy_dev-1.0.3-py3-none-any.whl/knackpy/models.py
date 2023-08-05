MAX_ROWS_PER_PAGE = 1000  # max supported by Knack API

FIELD_SETTINGS = {
    "address": {
        "subfields": [
            "city",
            "state",
            "street",
            "street2",
            "zip",
            "country",
            "latitude",
            "longitude",
        ]
    },
    "name": {"subfields": ["first", "middle", "last", ]},
    "timer": {"use_knack_format": True},
    "id": {"use_knack_format": True},  # because there is no "raw" format for this field
}

TIMEZONES = [
    {"common_name": "Samoa", "iana_name": "Pacific/Samoa"},
    {"common_name": "Hawaii", "iana_name": "Pacific/Honolulu"},
    {"common_name": "Marquesas Islands", "iana_name": "Pacific/Marquesas"},
    {"common_name": "Alaska", "iana_name": "America/Anchorage"},
    {"common_name": "Baja California", "iana_name": "America/Tijuana"},
    {"common_name": "Pacific Time (US & Canada)", "iana_name": "America/Los_Angeles"},
    {"common_name": "Chihuahua,Mazatlan", "iana_name": "America/Chihuahua"},
    {"common_name": "Arizona", "iana_name": "America/Phoenix"},
    {"common_name": "Mountain Time (US & Canada)", "iana_name": "America/Denver"},
    {"common_name": "Central Time (US & Canada)", "iana_name": "America/Chicago"},
    {"common_name": "Central America", "iana_name": "America/Guatemala"},
    {
        "common_name": "Guadalajara,Mexico City, Monterrey",
        "iana_name": "America/Mexico_City",
    },
    {"common_name": "Saskatchewan", "iana_name": "America/Regina"},
    {"common_name": "Bogota, Lima, Quito", "iana_name": "America/Bogota"},
    {"common_name": "Eastern Time (US & Canada)", "iana_name": "America/New_York"},
    {"common_name": "Indiana (East)", "iana_name": "America/Indianapolis"},
    {"common_name": "Caracas", "iana_name": "America/Caracas"},
    {"common_name": "Atlantic Time (Canada)", "iana_name": "America/Halifax"},
    {"common_name": "Asuncion", "iana_name": "America/Asuncion"},
    {"common_name": "Cuiaba", "iana_name": "America/Cuiaba"},
    {"common_name": "Santiago", "iana_name": "America/Santiago"},
    {
        "common_name": "Georgetown, La Paz, Manaus, San Juan",
        "iana_name": "America/La_Paz",
    },
    {"common_name": "Newfoundland", "iana_name": "America/St_Johns"},
    {"common_name": "Buenos Aires", "iana_name": "America/Buenos_Aires"},
    {"common_name": "Brasilia", "iana_name": "America/Sao_Paul"},
    {"common_name": "Cayenne, Fortaleza", "iana_name": "America/Cayenne"},
    {"common_name": "Montevideo", "iana_name": "America/Montevideo"},
    {"common_name": "Greenland", "iana_name": "America/Godthab"},
    {"common_name": "Azores", "iana_name": "Atlantic/Azores"},
    {"common_name": "Cape Verde Is.", "iana_name": "Atlantic/Cape_Verde"},
    {"common_name": "Casablanca", "iana_name": "Africa/Casablanca"},
    {"common_name": "Monrovia,Reykjavik", "iana_name": "Atlantic/Reykjavik"},
    {
        "common_name": "Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
        "iana_name": "Europe/London",
    },
    {"common_name": "Sarajevo,Skopje, Warsaw, Zagreb", "iana_name": "Europe/Warsaw"},
    {"common_name": "West Central Africa", "iana_name": "Africa/Lagos"},
    {
        "common_name": "Belgrade,Bratislava, Budapest, Ljubljana, Prague",
        "iana_name": "Europe/Budapest",
    },
    {"common_name": "Brussels, Copenhagen,Madrid, Paris", "iana_name": "Europe/Paris"},
    {
        "common_name": "Amsterdam,Berlin, Bern, Rome,Stockholm, Vienna",
        "iana_name": "Europe/Berlin",
    },
    {"common_name": "Harare, Pretoria", "iana_name": "Africa/Johannesburg"},
    {"common_name": "Damascus", "iana_name": "Asia/Damascus"},
    {
        "common_name": "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "iana_name": "Europe/Kiev",
    },
    {"common_name": "Windhoek", "iana_name": "Africa/Windhoek"},
    {"common_name": "Minsk", "iana_name": "Europe/Minsk"},
    {"common_name": "Athens,Bucharest, Istanbul", "iana_name": "Europe/Istanbu"},
    {"common_name": "Amman", "iana_name": "Asia/Amman"},
    {"common_name": "Beirut", "iana_name": "Asia/Beirut"},
    {"common_name": "Jerusalem", "iana_name": "Asia/Jerusalem"},
    {"common_name": "Cairo", "iana_name": "Africa/Cairo"},
    {"common_name": "Kuwait, Riyadh", "iana_name": "Asia/Riyadh"},
    {"common_name": "Moscow, St. Petersburg, Volgograd", "iana_name": "Europe/Moscow"},
    {"common_name": "Baghdad", "iana_name": "Asia/Baghdad"},
    {"common_name": "Nairobi", "iana_name": "Africa/Nairobi"},
    {"common_name": "Tehran", "iana_name": "Asia/Tehran"},
    {"common_name": "Port Louis", "iana_name": "Indian/Mauritius"},
    {"common_name": "Tbilisi", "iana_name": "Asia/Tbilisi"},
    {"common_name": "Baku", "iana_name": "Asia/Baku"},
    {"common_name": "Yerevan", "iana_name": "Asia/Yerevan"},
    {"common_name": "Abu Dhabi, Muscat", "iana_name": "Asia/Dubai"},
    {"common_name": "Kabul", "iana_name": "Asia/Kabul"},
    {"common_name": "Yekaterinburg", "iana_name": "Asia/Yekaterinburg"},
    {"common_name": "Islamabad,Karachi", "iana_name": "Asia/Karachi"},
    {"common_name": "Tashkent", "iana_name": "Asia/Tashkent"},
    {"common_name": "Chennai, Kolkata, Mumbai,New Delhi", "iana_name": "Asia/Calcutta"},
    {"common_name": "Sri Jayawardenepura", "iana_name": "Asia/Colombo"},
    {"common_name": "Kathmandu", "iana_name": "Asia/Katmandu"},
    {"common_name": "Dhaka", "iana_name": "Asia/Dhaka"},
    {"common_name": "Novosibirsk", "iana_name": "Asia/Novosibirsk"},
    {"common_name": "Astana", "iana_name": "Asia/Almaty"},
    {"common_name": "Yangon (Rangoon)", "iana_name": "Asia/Rangoon"},
    {"common_name": "Krasnoyarsk", "iana_name": "Asia/Krasnoyarsk"},
    {"common_name": "Bangkok, Hanoi,Jakarta", "iana_name": "Asia/Bangkok"},
    {"common_name": "Ulaanbaatar", "iana_name": "Asia/Ulaanbaatar"},
    {"common_name": "Perth", "iana_name": "Australia/Perth"},
    {"common_name": "Taipei", "iana_name": "Asia/Taipei"},
    {"common_name": "Kuala Lumpur,Singapore", "iana_name": "Asia/Singapore"},
    {
        "common_name": "Beijing,Chongqing,Hong Kong, Urumqi",
        "iana_name": "Asia/Shanghai",
    },
    {"common_name": "Irkutsk", "iana_name": "Asia/Irkutsk"},
    {"common_name": "Pyongyang", "iana_name": "Asia/Pyongyang"},
    {"common_name": "Eucla", "iana_name": "Australia/Eucla"},
    {"common_name": "Seoul", "iana_name": "Asia/Seoul"},
    {"common_name": "Osaka,Sapporo, Tokyo", "iana_name": "Asia/Tokyo"},
    {"common_name": "Yakutsk", "iana_name": "Asia/Yakutsk"},
    {"common_name": "Darwin", "iana_name": "Australia/Darwin"},
    {"common_name": "Adelaide", "iana_name": "Australia/Adelaide"},
    {"common_name": "Hobart", "iana_name": "Australia/Hobart"},
    {"common_name": "Vladivostok", "iana_name": "Asia/Vladivostok"},
    {"common_name": "Guam, Port Moresby", "iana_name": "Pacific/Port_Moresby"},
    {"common_name": "Brisbane", "iana_name": "Australia/Brisbane"},
    {"common_name": "Canberra,Melbourne, Sydney", "iana_name": "Australia/Sydney"},
    {"common_name": "Lord Howe Island", "iana_name": "Australia/LHI"},
    {"common_name": "Magadan, Solomon Is.,New Caledonia", "iana_name": "Asia/Magadan"},
    {"common_name": "Fiji", "iana_name": "Pacific/Fiji"},
    {"common_name": "Petropavlovsk-Kamchatsky", "iana_name": "Asia/Kamchatka"},
    {"common_name": "Auckland, Wellington", "iana_name": "Pacific/Auckland"},
    {"common_name": "Chatham Islands", "iana_name": "Pacific/Chatham"},
    {
        "common_name": "Phoenix Islands, Tokelau, Tonga",
        "iana_name": "Pacific/Enderbury",
    },
    {"common_name": "Line Islands", "iana_name": "Pacific/Kiritimati"},
]

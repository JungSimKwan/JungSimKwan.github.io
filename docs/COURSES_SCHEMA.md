Course YAML schema

Fields:
- name: string (display name)
- id: string (unique short id)
- weight: integer (ordering)
- banner: path to banner image
- gallery: array of image paths
- region: string
- region_id: string
- address_display: string (human friendly address)
- address_search: string (search term for maps)
- lat: optional latitude (float)
- lon: optional longitude (float)
- classes: array of class objects
  - name: string (class label)
  - day_of_week: string (0=Sun..6=Sat) or localized key
  - starttime: string (HH:MM)
  - endtime: string (HH:MM)
- description: multiline string (markdown or text)
- related_courses: array of ids (strings)
- contact_phone: string
- registration_link: URL or relative path

Example:

name: "範例體育館"
id: "example"
weight: 1
banner: "img/courses/example.jpg"
region: "新界東"
region_id: "nte"
address_display: "範例街 1 號"
address_search: "範例體育館"
gallery:
  - "img/courses/example.jpg"
classes:
  - name: "兒童班"
    day_of_week: "6"
    starttime: "10:00"
    endtime: "11:00"
description: |
  範例體育館的課程示例說明，支援多行文本。
related_courses: []
contact_phone: "+852 6682 0106"
registration_link: "/contact/"

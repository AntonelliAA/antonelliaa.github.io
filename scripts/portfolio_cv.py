"""Generate the portfolio CV. Run with an optional output PDF path."""

from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


OUTPUT = (Path(sys.argv[1]).expanduser().resolve() if len(sys.argv) > 1
          else Path(__file__).resolve().parents[1] / 'public' / 'resume' / 'cv.pdf')
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PAGE_W, PAGE_H = A4
MARGIN = 46
RIGHT = PAGE_W - MARGIN
TEXT = colors.HexColor('#17191D')
MUTED = colors.HexColor('#60666B')
ACCENT = colors.HexColor('#C75323')
RULE = colors.HexColor('#D7DADC')
PALE = colors.HexColor('#F4F2F0')

pdfmetrics.registerFont(TTFont('SFPro', '/Library/Fonts/SF-Pro.ttf'))
pdfmetrics.registerFont(TTFont('ArialBold', '/System/Library/Fonts/Supplemental/Arial Bold.ttf'))
pdfmetrics.registerFontFamily('SFPro', normal='SFPro', bold='ArialBold')

styles = {
    'summary': ParagraphStyle('summary', fontName='SFPro', fontSize=10.6, leading=15.4, textColor=TEXT),
    'body': ParagraphStyle('body', fontName='SFPro', fontSize=9.7, leading=14.1, textColor=TEXT),
    'muted': ParagraphStyle('muted', fontName='SFPro', fontSize=9.2, leading=13.5, textColor=MUTED),
    'small': ParagraphStyle('small', fontName='SFPro', fontSize=8.5, leading=12.2, textColor=TEXT),
}

c = canvas.Canvas(str(OUTPUT), pagesize=A4)
c.setTitle('Anthony Antonelli Andrade - iOS Developer CV')
c.setAuthor('Anthony Antonelli Andrade')
c.setSubject('Current iOS development experience and published apps')


def text(x, y, value, size=9.6, color=TEXT, font='SFPro'):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, value)


def right_text(x, y, value, size=8.7, color=MUTED, font='SFPro'):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawRightString(x, y, value)


def paragraph(x, top, width, html, style='body'):
    p = Paragraph(html, styles[style])
    _, height = p.wrap(width, PAGE_H)
    p.drawOn(c, x, top - height)
    return top - height


def section(y, title, number=None):
    c.setStrokeColor(RULE)
    c.setLineWidth(0.65)
    c.line(MARGIN, y + 13, RIGHT, y + 13)
    text(MARGIN, y, title.upper(), 8.0, ACCENT, 'ArialBold')
    if number:
        right_text(RIGHT, y, number, 8.0, MUTED)
    return y - 20


def linked(x, y, label, url, size=8.9, color=TEXT):
    text(x, y, label, size, color)
    width = pdfmetrics.stringWidth(label, 'SFPro', size)
    c.linkURL(url, (x, y - 2, x + width, y + size + 2), relative=0, thickness=0)
    return x + width


def product(y, name, role, description, url=None, status=None):
    text(MARGIN, y, name, 11.2, TEXT, 'ArialBold')
    if status:
        right_text(RIGHT, y + 1, status.upper(), 7.7, ACCENT, 'ArialBold')
    y -= 16
    y = paragraph(MARGIN, y, RIGHT - MARGIN, description, 'body')
    y -= 7
    text(MARGIN, y, role, 8.5, MUTED)
    if url:
        links = url if isinstance(url, list) else [('App Store', url)]
        cursor = RIGHT
        for label, destination in reversed(links):
            width = pdfmetrics.stringWidth(label, 'SFPro', 8.5)
            cursor -= width
            linked(cursor, y, label, destination, 8.5, ACCENT)
            cursor -= 13
    return y - 25


def role(y, title, company, period, bullets):
    text(MARGIN, y, title, 11.0, TEXT, 'ArialBold')
    right_text(RIGHT, y + 1, period, 8.4, MUTED)
    y -= 16
    text(MARGIN, y, company, 9.0, ACCENT)
    y -= 10
    for bullet in bullets:
        y -= 9
        text(MARGIN + 2, y - 2, chr(8226), 9.0, ACCENT)
        y = paragraph(MARGIN + 16, y, RIGHT - MARGIN - 16, bullet, 'small') - 3
    return y - 19


def footer(page):
    c.setStrokeColor(RULE)
    c.line(MARGIN, 46, RIGHT, 46)
    text(MARGIN, 31, 'Anthony Antonelli Andrade  /  iOS Developer', 8.0, MUTED)
    right_text(RIGHT, 31, f'{page} / 2', 8.0, MUTED)


# Page 1: work in the product, inspired by the portfolio's editorial direction.
c.setFillColor(ACCENT)
c.rect(MARGIN, PAGE_H - 51, 28, 3, fill=1, stroke=0)
text(MARGIN, PAGE_H - 92, 'Anthony Antonelli Andrade', 25, TEXT, 'ArialBold')
text(MARGIN, PAGE_H - 113, 'iOS Developer  /  Software Engineer', 11.5, MUTED)
contact_y = PAGE_H - 137
x = MARGIN
x = linked(x, contact_y, 'antonellia.dev@gmail.com', 'mailto:antonellia.dev@gmail.com', 8.6)
text(x + 10, contact_y, '|', 8.6, MUTED)
x = linked(x + 20, contact_y, 'LinkedIn', 'https://linkedin.com/in/anthony-antonelli-andrade', 8.6)
text(x + 10, contact_y, '|', 8.6, MUTED)
x = linked(x + 20, contact_y, 'GitHub', 'https://github.com/AntonelliAA', 8.6)
right_text(RIGHT, contact_y, 'Porto Alegre, Brazil', 8.6, MUTED)

y = section(PAGE_H - 177, 'Profile')
y = paragraph(MARGIN, y, RIGHT - MARGIN,
    'I design, build and publish iPhone apps. My work includes four products on the App Store - Palco, Rise of the Lich King, Boraa and odinPedidos - and both Freela onTap apps, listed for November 2026. I work across interface, implementation, testing and release.',
    'summary') - 21

y = section(y, 'Selected products', '01')
y = product(y,
    'Palco: Oratória e Apresentação',
    'Independent project  |  Swift 6, SwiftUI, on-device speech recognition',
    'Built this private speech rehearsal app end to end. Audio and transcription stay on the iPhone; measured speaking metrics support qualitative feedback. I used spec-driven development with Codex, Claude, skills and MCPs, reviewing decisions and results throughout (HITL).',
    'https://apps.apple.com/br/app/palco-orat%C3%B3ria-e-apresenta%C3%A7%C3%A3o/id6796434989', 'Released')
y = product(y,
    'Freela onTap: Empresas + Vagas e Turnos',
    'Both iPhone apps  |  Swift 6, SwiftUI, shared codebase',
    'Developed both sides of the shift marketplace. My work includes maps and distance search, onboarding and notifications. The App Store listings show availability expected on 16 November 2026.',
    [
        ('Empresas', 'https://apps.apple.com/br/app/freela-ontap-empresas/id6818285624'),
        ('Vagas e Turnos', 'https://apps.apple.com/br/app/freela-ontap-vagas-e-turnos/id6818288726'),
    ], 'Listed for November')
y = product(y,
    'Rise of the Lich King',
    'iOS game  |  Swift, SwiftUI, StoreKit 2',
    'Designed, built and submitted the game to the App Store. It reached 100 downloads during its first week.',
    'https://apps.apple.com/br/app/rise-of-the-lich-king/id6760662821', 'Released')
y = product(y,
    'Boraa',
    'Team of five  |  SwiftUI, MapKit, REST APIs',
    'Contributed backend routes and deployment, MapKit integration and frontend screens for the social event app.',
    'https://apps.apple.com/br/app/boraa/id6752790553', 'Released')
y = product(y,
    'odinPedidos',
    'Sole mobile developer  |  React Native, Expo, TypeScript',
    'Built the order management app for sales representatives, from screens and REST integration to both store releases. It serves 50+ paying clients.',
    'https://apps.apple.com/br/app/odin-pedidos/id6755982771', 'Released')
if y < 64:
    raise RuntimeError(f'Page 1 content collides with footer: y={y:.1f}')
footer(1)
c.showPage()

# Page 2: career evidence and skills.
c.setFillColor(ACCENT)
c.rect(MARGIN, PAGE_H - 51, 28, 3, fill=1, stroke=0)
text(MARGIN, PAGE_H - 78, 'Experience & foundations', 22, TEXT, 'ArialBold')
right_text(RIGHT, PAGE_H - 76, 'ANTHONY ANTONELLI', 8.0, MUTED, 'ArialBold')

y = section(PAGE_H - 112, 'Experience', '02')
y = role(y, 'iOS Developer', 'Apple Developer Academy | PUCRS', 'Feb 2025 - present', [
    'Published Rise of the Lich King; 100 downloads in its first week. On Boraa, worked with a five-person team on backend deployment, MapKit and interface screens.',
    'Placed third of ten teams at the PUCRS Software Engineering Hackathon with myRates, delivered through TestFlight during the event.',
])
y = role(y, 'Software Engineer', 'GPSET Engenharia', 'Jan 2024 - Feb 2025', [
    'Connected SAP and equipment data to Power BI through a Python pipeline, reducing cost analysis from one week to one day.',
    'Built and maintained React and Node.js applications used by more than 25 people to plan work.',
])
y = role(y, 'Mobile & Backend Developer', 'Plugways Digital', 'Jan 2023 - Jan 2024', [
    'Built odinPedidos as the sole mobile developer. It is on the App Store and Google Play and serves 50+ paying clients.',
    'Implemented screens and REST integration, configured iOS capabilities and push notifications, and handled both store submissions.',
    'Built backend services with PHP, Node.js and MySQL, web interfaces with Angular, and managed AWS deployments.',
])

y = section(y, 'Technical practice', '03')
skill_rows = [
    ('Apple', 'Swift 6, SwiftUI, UIKit, MapKit, StoreKit 2, Core Data, SwiftData'),
    ('Mobile & web', 'React Native, Expo, TypeScript, React, Node.js, REST APIs'),
    ('Workflow', 'Git, code review, TestFlight, App Store Connect, Figma; spec-driven development and HITL with Codex, Claude, skills and MCPs'),
]
for label, value in skill_rows:
    text(MARGIN, y, label.upper(), 8.0, ACCENT, 'ArialBold')
    y = paragraph(MARGIN + 99, y + 4, RIGHT - MARGIN - 99, value, 'small') - 8

y = section(y - 18, 'Education & languages', '04')
text(MARGIN, y, 'B.Sc. in Software Engineering', 9.5, TEXT, 'ArialBold')
right_text(RIGHT, y, '2024 - 2027', 8.5, MUTED)
y -= 14
text(MARGIN, y, 'PUCRS, Porto Alegre', 8.7, MUTED)
y -= 20
text(MARGIN, y, 'Apple Developer Academy | PUCRS', 9.5, TEXT, 'ArialBold')
right_text(RIGHT, y, '2025 - 2027', 8.5, MUTED)
y -= 20
text(MARGIN, y, 'Portuguese: native  |  English: B2 (Bayswater College, London, 2022)', 8.7, MUTED)
y -= 17
text(MARGIN, y, 'Technical degree in Computer Science, EEEP Dr. Solon Tavares (2021 - 2023)', 8.7, MUTED)
if y < 64:
    raise RuntimeError(f'Page 2 content collides with footer: y={y:.1f}')
footer(2)
c.save()
print(f'{OUTPUT} ({OUTPUT.stat().st_size} bytes), page 1 ends at {y:.1f}')

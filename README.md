# 🟣 Tricky Question — Form Validation Project

A beginner-friendly HTML/CSS/JavaScript project that demonstrates **real-time form validation** with regex, character counters, and dynamic error messages.

---

## 📸 Preview

![Tricky Question Form](./Images/Screenshot%202026-04-24%20180304.png)

---

## 📋 Features

- ✅ **Name validation** — shows error if field is empty
- ✅ **Email validation** — checks correct email format using regex
- ✅ **Password validation** — restricts input to within 6 characters
- ✅ **Message textarea** — real-time character counter with 200 character limit
- ✅ **Live error messages** — appear beside each field without shifting layout
- ✅ **Responsive error positioning** — uses `position: relative/absolute` to anchor errors next to inputs

---

## 🗂️ Project Structure

```
tricky-question/
│
├── index.html       # Main HTML file with form structure
├── style.css        # Styling — purple theme, table layout, button
└── index.js         # JavaScript — all validation logic
```

---

## 🧠 Concepts Used

| Concept | Where it's used |
|---|---|
| Regular Expressions (Regex) | Name, email, password validation |
| `keyup` / `input` event listeners | Real-time field checking |
| `position: absolute` with `transform: translateY(-50%)` | Error message placement beside inputs |
| `visibility: hidden` vs `display: none` | Prevents layout shift on warning appear/disappear |
| `white-space: nowrap` | Keeps error text on one line |
| `maxlength` attribute | Hard browser limit on textarea |
| `value.length` check | Password character count without regex edge cases |

---

## 🚀 How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/tricky-question.git
   ```

2. Open `index.html` in your browser — no installations needed.

---

## ✅ Validation Rules

| Field | Rule |
|---|---|
| Name | Must not be empty or whitespace only |
| Email | Must match standard email format (e.g. `user@example.com`) |
| Password | Must be 6 characters or fewer |
| Message | Maximum 200 characters — counter updates in real time |

---

## 🐛 Known Fixes Applied

- Fixed `event` not passed as parameter in event listeners
- Fixed regex for password (`{1,6}$` with empty field guard)
- Fixed error span layout shift using `visibility: hidden` instead of `display: none`
- Fixed absolute-positioned error spans drifting on resize by wrapping inputs in `position: relative` divs

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript (no libraries)

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).# tricky-question
A beginner HTML/CSS/JS form validation project with real-time regex checks, character counter, and dynamic error messages.

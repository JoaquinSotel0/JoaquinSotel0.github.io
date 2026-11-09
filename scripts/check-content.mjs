import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { profile, projects, skillGroups } from "../src/data/portfolio.js";

// Fast, offline content safeguards. This does not test external availability.
assert.equal(profile.username, "JoaquinSotel0");
assert.equal(profile.github, "https://github.com/JoaquinSotel0");
assert.equal(projects.length, 3);
assert.equal(new Set(projects.map((project) => project.id)).size, 3);
assert.deepEqual(
  projects.map((project) => project.repository),
  [
    "https://github.com/CMancillas/creador_plan_de_proyectos",
    "https://github.com/JoaquinSotel0/ProyectoINGE",
    "https://github.com/JoaquinSotel0/COVID-2020-Durango",
  ],
);
for (const project of projects) {
  assert(project.details.length > 0, `Missing project context: ${project.id}`);
  for (const link of [project.repository, project.evidence]) {
    const url = new URL(link);
    assert.equal(url.protocol, "https:");
    assert.equal(url.hostname, "github.com");
  }
}
const skills = skillGroups.flatMap((group) => group.skills);
for (const skill of [
  "React",
  "Python",
  "Django",
  "C",
  "C++",
  "Java",
  "R",
  "Bash",
  "Git",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "JavaScript",
  "HTML",
  "CSS",
]) {
  assert(skills.includes(skill), `Missing supplied technology: ${skill}`);
}
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
assert(html.includes('lang="en"'));
assert(html.includes("https://joaquinsotel0.github.io/"));
console.log(
  "Portfolio content checks passed: 3 repositories, source links, 16 supplied technologies, English metadata.",
);

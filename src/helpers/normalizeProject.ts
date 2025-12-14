import type { Project, ProjectQuickPick } from "../types";

export function normalizeToProjectQuickPick(apiProject: Project): ProjectQuickPick {
    const label = apiProject.isFavorite ? `⭐ ${apiProject.name}` : apiProject.name;

    return { ...apiProject, label, alwaysShow: true };
}

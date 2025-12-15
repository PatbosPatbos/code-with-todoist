import type { QuickPickItem } from 'vscode';
import type { Section, Task, PersonalProject, WorkspaceProject } from '@doist/todoist-api-typescript';

// Project can be either PersonalProject or WorkspaceProject
export type Project = PersonalProject | WorkspaceProject;

export type TodoistState = {
    lastSyncTime?: Date;
    projects: ProjectQuickPick[];
    tasks: Task[];
    sections: Section[];
};

export type ProjectQuickPick = Project & QuickPickItem;

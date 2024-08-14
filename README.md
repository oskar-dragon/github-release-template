### Package Release Template

This is a template that we use for backend packages.

It uses

- esbuild for bundling
- tsx for running your code locally
- typescript
- jest for testing

### Steps after cloning this template

#### Change Action Workflow permission

To be able to use `changesets` and create a PR when there's a changesets file, you have to change settings in your repository
<img width="1237" alt="Screenshot 2023-12-19 at 22 30 45" src="https://github.com/oskar-dragon/package-release-template/assets/32719913/89d8659c-3589-49da-889e-05f282aface6">

#### Add NPM secret for actions

To be able to release, you have to add `NPM_TOKEN` secret
<img width="1252" alt="Screenshot 2023-12-19 at 22 31 46" src="https://github.com/oskar-dragon/package-release-template/assets/32719913/76eca44e-37c3-453c-8898-909ab71b8d44">

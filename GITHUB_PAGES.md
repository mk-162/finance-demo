# How to Enable GitHub Pages

I have already pre-configured the dashboard and set up an automated deployment workflow. Follow these steps to make the site live:

1. **Open your repository on GitHub:** [https://github.com/mk-162/finance-demo](https://github.com/mk-162/finance-demo)
2. **Navigate to Settings:** Click the **Settings** tab at the top of the page.
3. **Go to Pages:** In the left-hand menu, select **Pages** (under the "Code and automation" section).
4. **Set Deployment Source:** Under **Build and deployment > Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**.
5. **Verify Deployment:** Go to the **Actions** tab at the top. You should see a workflow named "Deploy Dashboard to GitHub Pages" starting.
6. **Access the Dashboard:** Once the action finishes, your dashboard will be live at:
    `https://mk-162.github.io/finance-demo/Management-Dashboard/`

> [!NOTE]
> Every time you push changes to the `Management Dashboard/` folder, GitHub will automatically rebuild and update this live URL for you.

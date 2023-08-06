from distutils.core import setup

filename = 'githubactionstest/version.py'
exec(open(filename).read())


setup(
  name = 'githubactionstest',         # How you named your package folder (MyLib)
  packages = ['githubactionstest'],   # Chose the same as "name"
  version = version,      # Start with a small number and increase it with every change you make
  license='MIT',        # Chose a license from here: https://help.github.com/articles/licensing-a-repository
  description = 'This is test package',   # Give a short description about your library
  author = 'Marcin Maciaszek',                   # Type in your name
  author_email = 'marcin.maciaszek@gmail.com',      # Type in your E-Mail
  url = 'https://github.com/MarcinMaciaszek/GitHubActionsTest',   # Provide either the link to your github or to your website
  download_url = 'https://github.com/MarcinMaciaszek/GitHubActionsTest',    # I explain this later on
  keywords = ['GITHUB', 'ACTIONS'],   # Keywords that define your package best
  install_requires=[            # I get to this in a second
          'fastapi',
          'uvicorn',
      ],
  classifiers=[
    'Development Status :: 3 - Alpha',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
    'Intended Audience :: Developers',      # Define that your audience are developers
    'Topic :: Software Development :: Build Tools',
    'License :: OSI Approved :: MIT License',   # Again, pick a license
    'Programming Language :: Python :: 3',      #Specify which pyhton versions that you want to support
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
  ],
)
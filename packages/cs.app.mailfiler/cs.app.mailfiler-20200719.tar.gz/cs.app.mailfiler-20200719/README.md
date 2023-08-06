Mailfiler is my email message filing system.

*Latest release 20200719*:
* mailfiler: make "-R rules_pattern" a global option.
* Add some Received: headers, improving traceability.
* More friendly and less noisy terminal output (I run mailfiler as a daemon in a tmux session).
* Quite a few small internal changes.

It monitors multiple Maildir folders for new messages
and files them according to various easy to write rules.
Its use is described fully in the mailfiler(1cs) manual entry.

The rules files are broadly quite simple and described fully
in the mailfiler(5cs) manual entry.
The rules are normally single line rules of the form:

    target,... label condition

If the rule should always fire
then the condition may be omitted.

The targets may be
mail folders (file the message in the named folder),
assignment statements (set an environment variable),
email addresses (send the message to the specified address)
or some other special purpose actions.

The conditions are usually tests of the header email addresses
including whether an address is a member of some group/alias
but may also test various other things about the message headers.

## Class `Condition_AddressMatch(_Condition,types.SimpleNamespace)`

A condition testing for the presence of an address.

### Method `Condition_AddressMatch.test_value(self, filer, header_name, header_value)`

Test this condition against a header value.

## Class `Condition_HeaderFunction(_Condition,types.SimpleNamespace)`

A condition testing the contents of a header.

### Method `Condition_HeaderFunction.test_func_contains(self, filer, header_name, header_value)`

Test if the rule's string is in the header.

### Method `Condition_HeaderFunction.test_value(self, filer, header_name, header_value)`

Test the header value against to test function.

## Class `Condition_InGroups(_Condition,types.SimpleNamespace)`

A condition testing messages addresses against address groups.

### Method `Condition_InGroups.test_value(self, filer, header_name, header_value)`

Test this condition against a header value.

## Class `Condition_Regexp(_Condition,types.SimpleNamespace)`

A condition testing headers against a regular expression.

### Method `Condition_Regexp.test_value(self, filer, header_name, header_value)`

Test this condition against a header value.

## Function `current_value(envvar, cfg, cfg_key, default, environ)`

Compute a configurable path value on the fly.

## Function `FilterReport(rule, matched, saved_to, ok_actions, failed_actions)`

Create a FilterReport object.

Parameters:
* `rule`: the `Rule` on which to report
* `matched`: whether the rule was matched
* `saved_to`: where messages were filed
* `ok_actions`: actions which succeeded
* `failed_actions`: actions which failed

## Function `get_target(s, offset, quoted=False)`

Parse a single target specification from a string; return Target and new offset.

Parameters:
* `s`: the string to parse
* `offset`: the starting offset of the parse
* `quoted`: if true then the parser is already inside quotes:
  do not expect comma or whitespace to end the target specification.
  Default: `False`

## Function `get_targets(s, offset)`

Parse list of targets from the string `s` starting at `offset`.
Return the list of Targets strings and the new offset.

## Function `maildir_from_name(mdirname, maildir_root, maildir_cache)`

Return the Maildir derived from mdirpath.

## Class `MailFiler(types.SimpleNamespace)`

A mail filer.

### Method `MailFiler.__init__(self, config_path=None, environ=None, rules_pattern=None)`

Initialise the MailFiler.

Parameters:
* `config_path`: location of config file, default from `DEFAULT_MAILFILER_RC`.
* `environ`: initial environment, default from `os.environ`.
* `rules_pattern`: rules pattenr, default from `envsub(DEFAULT_RULES_PATTERN)`

### Method `MailFiler.file_wmdir_key(self, wmdir, key)`

Accept a WatchedMaildir `wmdir` and a message `key`, return success.
This does not remove a successfully filed message or update the lurking list.

### Method `MailFiler.folder_logfile(self, folder_path)`

Return path to log file associated with the named folder.
TODO: base on relative path from folder root, not just basename.

### Method `MailFiler.maildir_from_folderspec(self, folderspec)`

Return the Maildir from `folderspec`.

### Method `MailFiler.maildir_watcher(self, folderspec)`

Return the singleton WatchedMaildir indicated by the `folderspec`.

### Method `MailFiler.monitor(self, folders, *, delay=None, justone=False, no_remove=False, upd=None)`

Monitor the specified `folders`, a list of folder spcifications.
If `delay` is not None, poll the folders repeatedly with a
delay of `delay` seconds between each pass.

### Method `MailFiler.report(msgfp)`

Implementation for command line "report" function: report on message.

### Method `MailFiler.save(self, targets, msgfp)`

Implementation for command line "save" function: save file to target.

### Method `MailFiler.subcfg(self, section_name)`

Return a section of the configuration.

### Method `MailFiler.sweep(self, wmdir, *, justone=False, no_remove=False, logfile=None, upd=None)`

Scan a WatchedMaildir for messages to filter.
Return the number of messages processed.

Update the set of lurkers with any keys not removed to prevent
filtering on subsequent calls.
If `justone`, return after filing the first message.

## Class `MailFilerCommand(cs.cmdutils.BaseCommand)`

MailFiler commandline implementation.


Command line usage:

    Usage: MailFilerCommand [-R rules_pattern] subopt [subopt-args...]
          -R rules_pattern
              Specify the rules file pattern used to specify rules files from
              Maildir names.
              Default: $HOME/.mailfiler/{maildir.basename}
      Subcommands:
        help [subcommand-names...]
          Print the help for the named subcommands,
          or for all subcommands if no names are specified.
        monitor [-1] [-d delay] [-n] [maildirs...]
          Monitor Maildirs for new messages and file them.
          -1  File at most 1 message per Maildir.
          -d delay
              Delay between runs in seconds.
              Default is to make only one run over the Maildirs.
          -n  No remove. Keep filed messages in the origin Maildir.
        report <message
          Report various things about a message from standard input.
        save target[,target...] <message
          Save a message from standard input to the specified targets.

### Method `MailFilerCommand.apply_defaults(options)`

Set up default options.

### Method `MailFilerCommand.apply_opts(opts, options)`

Apply command line options.

### Method `MailFilerCommand.cmd_monitor(self, argv, options)`

Usage: {cmd} [-1] [-d delay] [-n] [maildirs...]
Monitor Maildirs for new messages and file them.
-1  File at most 1 message per Maildir.
-d delay
    Delay between runs in seconds.
    Default is to make only one run over the Maildirs.
-n  No remove. Keep filed messages in the origin Maildir.

### Method `MailFilerCommand.cmd_report(self, argv, options)`

Usage: {cmd} <message
Report various things about a message from standard input.

### Method `MailFilerCommand.cmd_save(self, argv, options)`

Usage: {cmd} target[,target...] <message
  Save a message from standard input to the specified targets.

Save message to the `targets`,
a single command line argument of the form
of a mailfiler targets field.

### Method `MailFilerCommand.mailfiler(self, options)`

Prepare a `MailFiler` from the `options`.

### Method `MailFilerCommand.run_context(self, argv, options)`

Run commands at STATUS logging level (or lower if already lower).

## Function `main(argv=None, stdin=None)`

Mailfiler main programme.

## Class `MessageFiler(types.SimpleNamespace)`

A message filing object, filtering state information used during rule evaluation.

Attributes:
* `.maildb`: Current MailDB.
* `.environ`: Storage for variable settings.
* `.addresses(header)`: Caching list of addresses from specified header.

### Method `MessageFiler.__init__(self, context, environ=None)`

`context`: External state object, with maildb property, etc..
`environ`: Mapping which supplies initial variable names.
           Default from os.environ.

### Method `MessageFiler.addresses(self, *headers)`

Return the core addresses from the current Message and supplied
`headers`. Caches results for rapid rule evaluation.

### Method `MessageFiler.alert(self, alert_level, alert_message=None)`

Issue an alert with the specified `alert_message`.
If missing or None, use self.alert_message(self.message).
If `alert_level` is more than 1, prepend "-l alert_level"
to the alert command line arguments.

### Method `MessageFiler.alert_message(self, M)`

Return the alert message filled out with parameters from the Message `M`.

### Method `MessageFiler.apply_rule(self, R)`

Apply this the rule `R` to this MessageFiler.
The rule label, if any, is appended to the .labels attribute.
Each target is applied to the state.

### Method `MessageFiler.env(self, envvar, default)`

Shorthand for environment lookup.

### Method `MessageFiler.file(self, M, rules, message_path=None)`

File the specified message `M` according to the supplied `rules`.
If specified and not `None`, the `message_path` parameter
specifies the filename of the message, supporting hard linking
the message into a Maildir.

### Method `MessageFiler.format_message(self, M, fmt)`

Compute the alert message for the message `M` using the supplied format string `fmt`.

### Method `MessageFiler.group(self, group_name)`

Return the set of addresses in the named group.

### Method `MessageFiler.learn_header_addresses(self, header_names, *group_names)`

Update maildb groups with addresses from message headers.
Extract all the addresses from the specified
headers and add to the maildb groups named by `group_names`.

### Method `MessageFiler.learn_message_ids(self, header_names, *group_names)`

Update msgiddb groups with message-ids from message headers.

### Method `MessageFiler.maildir(self, mdirpath)`

Return the Maildir for `mdirpath`.

### Method `MessageFiler.modify(self, hdr, new_value, always=False)`

Modify the value of the named header `hdr`
to the new value `new_value` using cs.mailutils.modify_header.
`new_value` may be a string or an iterable of strings.
If headers were changed, forget self.message_path.

### Method `MessageFiler.process_environ(self)`

Compute the environment for a subprocess.

### Method `MessageFiler.resolve(self, foldername)`

Resolve a mail `foldername` against the filer's `MAILDIR` attribute.

### Method `MessageFiler.save_message(self)`

Perform the message save step based on the current filer state.
This is separated out to support the command line "save target" operation.

### Method `MessageFiler.save_to_pipe(self, argv, environ=None, mfp=None)`

Pipe a message to the command specific by `argv`.
`mfp` is a file containing the message text.
If `mfp` is None, use the text of the current message.

### Method `MessageFiler.sendmail(self, address, mfp=None, sender=None)`

Dispatch a message to `address`.
`mfp` is a file containing the message text.
If `mfp` is None, use the text of the current message.
If `sender` is supplied, pass to sendmail with -f option.

## Function `parserules(fp)`

Read rules from `fp`, yield Rules.

## Function `resolve_mail_path(mdirpath, maildir_root)`

Return the full path to the requested mail folder.

## Class `Rule`

A filing rule.

### Method `Rule.match(self, filer)`

Test the message in filer against this rule.

## Class `Rules(builtins.list)`

Simple subclass of list storing rules, with methods to load
rules and filter a message using the rules.

### Method `Rules.load(self, fp)`

Import an open rule file.

### Method `Rules.match(self, filer)`

Match the current message (filer.message) against the rules.
Update filer for matching rules.

## Function `save_to_folderpath(folderpath, M, message_path, flags)`

Save the Message `M` to the resolved `folderpath`.

Parameters:
* `folderpath`: the path to the target mail folder.
* `M`: the message to save.
* `message_path`: pathname of existing message file, allowing
  hardlinking to new maildir if not `None`.
* `flags`: save flags as from MessageFiler.flags

## Function `scrub_header(value)`

"Scrub" a header value.
Presently this means to undo RFC2047 encoding where possible.

## Class `Target_Assign(types.SimpleNamespace)`

A filing target to set a filing state environment variable.

### Method `Target_Assign.apply(self, filer)`

Apply the target by updating the filer environment.

## Class `Target_EnvSub(types.SimpleNamespace)`

A filing target to delivery to a string
which is subject to environment subject to environment variable expansion
where the environment variables are derived from the filing state.

### Method `Target_EnvSub.apply(self, filer)`

Perform environment substitution on target string and then
deliver to resulting string.

## Class `Target_Function(types.SimpleNamespace)`

A filing target to run a Python function against a message.

### Method `Target_Function.apply(self, filer)`

Apply this target:
run the Python function against the message.

## Class `Target_MailAddress(types.SimpleNamespace)`

A filing target for an email address.

### Method `Target_MailAddress.apply(self, filer)`

Apply this target:
add `self.address` to the set of target forwarding email addresses.

## Class `Target_MailFolder(types.SimpleNamespace)`

A filing target for a mail folder.

### Method `Target_MailFolder.apply(self, filer)`

Apply this target:
if the folder name is '.'
mark the filer as saving to the source folder,
otherwise add the resolved folder name to the set of target folders.

## Class `Target_PipeLine(types.SimpleNamespace)`

A filing target to pipe the message contents to a shell command.

### Method `Target_PipeLine.apply(self, filer)`

Apply this target:
append `self.shcmd` to the list of save commands.

## Class `Target_SetFlag(types.SimpleNamespace)`

A filing target to apply a flag to a message.

### Method `Target_SetFlag.apply(self, filer)`

Apply this target:
set a flag on the message.

## Class `Target_Substitution(types.SimpleNamespace)`

A filing target to apply a regular expression string substitution
to message headers.

### Method `Target_Substitution.apply(self, filer)`

Apply this target:
apply a regexp substitution to the message headers.

## Class `WatchedMaildir(types.SimpleNamespace)`

A class to monitor a Maildir and filter messages.

### Method `WatchedMaildir.close(self)`

Close the WatchedMaildir.

### Method `WatchedMaildir.flush(self)`

Forget state.
The set of lurkers is emptied.

### Method `WatchedMaildir.keypath(self, key)`

Return the kypath for `key`.

### Method `WatchedMaildir.keys(self, flush=False)`

Return the keys of the Maildir.

### Method `WatchedMaildir.lurk(self, key)`

Add `key` to the luking list.

### Method `WatchedMaildir.remove(self, key)`

Remove `key` from the maildir.

### Method `WatchedMaildir.unlurk(self, key)`

Remove `key` from the lurking list.

# Release Log



*Release 20200719*:
* mailfiler: make "-R rules_pattern" a global option.
* Add some Received: headers, improving traceability.
* More friendly and less noisy terminal output (I run mailfiler as a daemon in a tmux session).
* Quite a few small internal changes.

*Release 20191006*:
Update for recent cs.deco.cachedmethod rename.

*Release 20190512*:
* Promote $DEFAULT to a list of targets.
* Implement save-to-self "." target to support folders where filing elsewhere is an exception.
* Move the manual entries to Markdown format.

*Release 20190103.1*:
DISTINFO fix.

*Release 20190103*:
Various fixes. Documentation improvements.

*Release 20160828*:
* Update metadata with "install_requires" instead of "requires".
* A few bugfixes.

*Release 20160403*:
Bug fix for new $ALERT_TARGETS feature.

*Release 20160402*:
* Make rule processing more robust in the face of errors in individual targets.
* Add "report" operation for debugging rules against a test message.
* Add "function" targets.
* Make header values available for use in substitution rules.
* Allow local@domain and @domain inside (...|...) group matches.
* Honour new $ALERT_TARGETS variable for addition targets implied by issues an alert for a message.

*Release 20150805*:
* better handling of configuration errors
* substitution actions accept multiple header names
* initial "scrub" action
* fiddle headers of resent messages to avoid blowback to original authors

*Release 20150118.6*:
further README updates

*Release 20150118.5*:
more README formatting

*Release 20150118.4*:
more README fixes

*Release 20150118.3*:
cs.app.mailfiler README fixes

*Release 20150118.2*:
doc updates

*Release 20150118*:
Initial PyPI release.
